import React, { useMemo } from 'react';
import { Divider, Empty, Spin, Typography } from 'antd';
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  DashboardOutlined,
  FileTextOutlined,
  FlagOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

import { DetailedInfo } from 'shared-components';
import {
  useFetchConstructorAllStats,
  useFetchConstructorDescription,
  useFetchConstructorDrivers,
  useFetchConstructorStat,
} from 'hooks/constructors';

const { Text } = Typography;

export interface ConstructorDetailProps {
  season: string;
  constructorId: string;
  onClearConstructorId: () => void;
}

const ConstructorDetail: React.FC<ConstructorDetailProps> = ({
  season,
  constructorId,
  onClearConstructorId,
}: ConstructorDetailProps) => {
  const { constructorStat, isLoading: isFetchingConstructorStat } = useFetchConstructorStat({ season, constructorId });
  const { constructorStats, isLoading: isFetchingConstructorAllStats } = useFetchConstructorAllStats({ constructorId });
  const { constructorDrivers, isLoading: isFetchingConstructorDrivers } = useFetchConstructorDrivers({
    season,
    constructorId,
  });
  const { constructorDescription, isLoading: isFetchingConstructorDescriptions } = useFetchConstructorDescription({
    constructorUrl: constructorStat?.ConstructorStandings[0].Constructor.url.split('/').pop() || '',
  });

  const isLoading = useMemo(() => {
    return isFetchingConstructorStat || isFetchingConstructorAllStats;
  }, [isFetchingConstructorStat, isFetchingConstructorAllStats]);

  const sortedConstructorStats = useMemo(() => {
    return constructorStats?.sort((prevSeason: any, nextSeason: any) => nextSeason.season - prevSeason.season) || [];
  }, [constructorStats]);

  const constructorTotalChampionships = useMemo(() => {
    return sortedConstructorStats.filter((season: any) => season.ConstructorStandings[0].position === '1').length;
  }, [sortedConstructorStats]);

  const constructorTotalRaceWins = useMemo(() => {
    return sortedConstructorStats.reduce(
      (sum: number, season: any) => sum + parseInt(season.ConstructorStandings[0].wins),
      0
    );
  }, [sortedConstructorStats]);

  if (!constructorStat)
    return (
      <Spin spinning={isLoading}>
        <div className="px-8 py-6">
          <ArrowLeftOutlined className="text-xl" onClick={onClearConstructorId} />
          <Empty />
        </div>
      </Spin>
    );
  return (
    <div className="px-8 py-6">
      <ArrowLeftOutlined className="text-xl" onClick={onClearConstructorId} />
      <Spin spinning={isLoading}>
        <div className="mt-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="rounded-md" style={{ width: '2.5rem', height: '1.75rem' }}>
                <img
                  src={`assets/img/constructors/${constructorStat.ConstructorStandings[0].Constructor.constructorId}.svg`}
                  alt={constructorStat.ConstructorStandings[0].Constructor.name}
                  className="w-full h-full"
                />
              </div>
              <div className="ml-4">
                <Text className="font-bold uppercase">{constructorStat.ConstructorStandings[0].Constructor.name}</Text>
              </div>
            </div>
            <div className="rounded-md" style={{ width: '2.5rem', height: '1.75rem' }}>
              <img
                src={`assets/img/flags/${constructorStat?.ConstructorStandings[0].Constructor.nationality}.svg`}
                alt={constructorStat?.ConstructorStandings[0].Constructor.nationality}
                className="w-full h-full"
              />
            </div>
          </div>
          <Divider />
          <div className="mt-6">
            <Text className="text-xl font-bold">Bio</Text>
            <DetailedInfo
              Icon={
                <div className="rounded-md mt-2" style={{ width: '1.25rem', height: '0.875rem' }}>
                  <img
                    src={`assets/img/flags/${constructorStat.ConstructorStandings[0].Constructor.nationality}.svg`}
                    alt={constructorStat.ConstructorStandings[0].Constructor.nationality}
                    className="w-full h-full"
                  />
                </div>
              }
              title="Nationality"
              content={constructorStat.ConstructorStandings[0].Constructor.nationality}
            />
            <DetailedInfo
              Icon={<CalendarOutlined />}
              title="First Team Entry"
              content={sortedConstructorStats[sortedConstructorStats.length - 1]?.season}
            />
            <DetailedInfo
              Icon={<FileTextOutlined />}
              title="Biography"
              content={constructorDescription?.replace(/\. /g, '. \n\n')}
              isLoading={isFetchingConstructorDescriptions}
            />
          </div>
          <Divider />
          <div className="mt-6">
            <Text className="text-xl font-bold">Since Debut</Text>
            <DetailedInfo Icon={<TrophyOutlined />} title="Championships" content={constructorTotalChampionships} />
            <DetailedInfo Icon={<FlagOutlined />} title="Race Wins" content={constructorTotalRaceWins} />
            <DetailedInfo Icon={<DashboardOutlined />} title="Seasons" content={sortedConstructorStats.length} />
            <DetailedInfo
              Icon={<CalendarOutlined />}
              title="First Team Entry"
              content={sortedConstructorStats[sortedConstructorStats.length - 1]?.season}
            />
          </div>
          <Divider />
          <div className="mt-6">
            <Spin spinning={isFetchingConstructorDrivers}>
              <Text className="text-xl font-bold">{constructorDrivers?.season} Drivers</Text>
              {constructorStat &&
                constructorDrivers &&
                constructorDrivers.Drivers.map((driver: any) => (
                  <div key={driver.driverId} className="flex items-center my-2">
                    <div
                      className={`flex justify-center rounded-md w-8 h-8 items-center team-${constructorStat.ConstructorStandings[0].Constructor.constructorId}`}
                    >
                      <Text className="text-white">{driver.permanentNumber}</Text>
                    </div>
                    <div className="ml-4">
                      <Text>{driver.givenName}</Text>
                      <br />
                      <Text className="font-bold uppercase">{driver.familyName}</Text>
                    </div>
                  </div>
                ))}
            </Spin>
          </div>
          <Divider />
          <div className="mt-6">
            <Text className="text-xl font-bold">Seasons</Text>
            {sortedConstructorStats.map((season: any) => (
              <div key={season.season} className="flex items-center border p-4 mt-2 mb-4 shadow-sm">
                <div className="font-bold">{season.season}</div>
                <div
                  className={`mx-4 team-line team-${constructorStat.ConstructorStandings[0].Constructor.constructorId}`}
                />
                <div>
                  <Text className="font-bold">P{season.ConstructorStandings[0].position}</Text>
                  <br />
                  <Text>
                    {season.ConstructorStandings[0].wins} wins - {season.round} races -{' '}
                    {season.ConstructorStandings[0].points} points
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default ConstructorDetail;
