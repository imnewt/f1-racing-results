import React, { useMemo } from 'react';
import { Divider, Empty, Spin, Typography } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, FileTextOutlined, GiftOutlined } from '@ant-design/icons';

import { useFetchDriverStat, useFetchDriverAllStats, useFetchDriverDescription } from 'hooks/drivers';
import { DetailedInfo } from 'shared-components';
import DriverOverview from './DriverOverview';

const { Text } = Typography;

export interface DriverDetailProps {
  season: string;
  driverId: string;
  onClearDriverId: () => void;
}

const DriverDetail: React.FC<DriverDetailProps> = ({ season, driverId, onClearDriverId }: DriverDetailProps) => {
  const { driverStat, isLoading: isFetchingDriverStat } = useFetchDriverStat({ season, driverId });
  const { driverStats, isLoading: isFetchingDriverAllStats } = useFetchDriverAllStats({ driverId });
  const { driverDescription, isLoading: isFetchingDriverDescriptions } = useFetchDriverDescription({
    driverUrl: driverStat?.DriverStandings?.[0]?.Driver?.url?.split('/').pop() || '',
  });

  const isLoading = useMemo(() => {
    return isFetchingDriverStat || isFetchingDriverAllStats;
  }, [isFetchingDriverStat, isFetchingDriverAllStats]);

  const sortedDriverStats = useMemo(() => {
    return driverStats?.sort((prevSeason: any, nextSeason: any) => nextSeason.season - prevSeason.season) || [];
  }, [driverStats]);

  if (!driverStat)
    return (
      <Spin spinning={isLoading}>
        <div className="px-8 py-6">
          <ArrowLeftOutlined className="text-xl" onClick={onClearDriverId} />
          <Empty />
        </div>
      </Spin>
    );
  return (
    <div className="px-8 py-6">
      <ArrowLeftOutlined className="text-xl" onClick={onClearDriverId} />
      <Spin spinning={isLoading}>
        <div className="mt-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div
                className={`flex justify-center rounded-md w-8 h-8 items-center team-${driverStat?.DriverStandings[0].Constructors[0].constructorId}`}
              >
                <Text className="text-white">{driverStat?.DriverStandings[0].Driver.permanentNumber}</Text>
              </div>
              <div className="ml-4">
                <Text>{driverStat?.DriverStandings[0].Driver.givenName}</Text>
                <br />
                <Text className="font-bold uppercase">{driverStat?.DriverStandings[0].Driver.familyName}</Text>
              </div>
            </div>
            <div className="rounded-md" style={{ width: '2.5rem', height: '1.75rem' }}>
              <img
                src={`assets/img/flags/${driverStat?.DriverStandings[0].Driver.nationality}.svg`}
                alt={driverStat?.DriverStandings[0].Driver.nationality}
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
                    src={`assets/img/flags/${driverStat.DriverStandings[0].Driver.nationality}.svg`}
                    alt={driverStat.DriverStandings[0].Driver.nationality}
                    className="w-full h-full"
                  />
                </div>
              }
              title="Nationality"
              content={driverStat.DriverStandings[0].Driver.nationality}
            />
            <DetailedInfo
              Icon={<GiftOutlined />}
              title="Age"
              content={
                new Date().getFullYear() - new Date(driverStat.DriverStandings[0].Driver.dateOfBirth).getFullYear()
              }
            />
            <DetailedInfo
              Icon={<CalendarOutlined />}
              title="DOB"
              content={new Intl.DateTimeFormat('en-GB').format(
                new Date(driverStat.DriverStandings[0].Driver.dateOfBirth)
              )}
            />
            <DetailedInfo
              Icon={<FileTextOutlined />}
              title="Biography"
              content={driverDescription?.replace(/\. /g, '. \n\n')}
              isLoading={isFetchingDriverDescriptions}
            />
          </div>
          <Divider />
          <DriverOverview driverId={driverStat.DriverStandings[0].Driver.driverId} />
          <Divider />
          <div className="mt-6">
            <Text className="text-xl font-bold">{driverStat?.season} Team</Text>
            <div className="flex items-center">
              <div style={{ width: '2.5rem', height: '1.75rem' }}>
                <img
                  src={`assets/img/constructors/${driverStat?.DriverStandings[0].Constructors[0].constructorId}.svg`}
                  alt={driverStat?.DriverStandings[0].Constructors[0].name}
                  className="w-full h-full"
                />
              </div>
              <Text className="ml-4">{driverStat?.DriverStandings[0].Constructors[0].name}</Text>
            </div>
          </div>
          <Divider />
          <div className="mt-6">
            <Text className="text-xl font-bold">Seasons</Text>
            {sortedDriverStats.map((season: any) => (
              <div key={season.season} className="flex items-center border p-4 mt-2 mb-4 shadow-sm">
                <div className="font-bold">{season.season}</div>
                <div className={`mx-4 team-line team-${season.DriverStandings[0].Constructors[0].constructorId}`} />
                <div>
                  <Text className="font-bold">P{season.DriverStandings[0].position}</Text>
                  <br />
                  <Text>
                    {season.DriverStandings[0].Constructors[0].name} - {season.round} races -{' '}
                    {season.DriverStandings[0].points} points
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

export default DriverDetail;
