import React, { useMemo } from 'react';
import { Divider, Empty, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useFetchConstructorStatistics, useFetchConstructorSeasonStatistics } from 'hooks/constructors';
import { ConstructorStatistic } from 'models/Constructor';
import SeasonStatistics from './SeasonStatistics';
import Drivers from './Drivers';
import SinceDebut from './SinceDebut';
import Bio from './Bio';
import Badge from './Badge';

export interface DetailProps {
  season: string;
  constructorId: string;
  onClearConstructorId: () => void;
}

const Detail: React.FC<DetailProps> = ({ season, constructorId, onClearConstructorId }: DetailProps) => {
  const { seasonStatistics, isLoading: isFetchingConstructorStat } = useFetchConstructorSeasonStatistics({
    season,
    constructorId,
  });
  const { statistics, isLoading: isFetchingConstructorAllStats } = useFetchConstructorStatistics({ constructorId });

  const isLoading = useMemo(() => {
    return isFetchingConstructorStat || isFetchingConstructorAllStats;
  }, [isFetchingConstructorStat, isFetchingConstructorAllStats]);

  const sortedStatistics = useMemo(() => {
    return (
      statistics?.sort(
        (prevSeason: ConstructorStatistic, nextSeason: ConstructorStatistic) => +prevSeason.season - +nextSeason.season
      ) || []
    );
  }, [statistics]);

  const totalChampionships = useMemo(() => {
    return sortedStatistics.filter((season: ConstructorStatistic) => season.ConstructorStandings[0].position === '1')
      .length;
  }, [sortedStatistics]);

  const totalRaceWins = useMemo(() => {
    return sortedStatistics.reduce(
      (sum: number, season: ConstructorStatistic) => sum + parseInt(season.ConstructorStandings[0].wins),
      0
    );
  }, [sortedStatistics]);

  if (!seasonStatistics)
    return (
      <div className="px-8 py-6">
        <ArrowLeftOutlined className="text-xl" onClick={onClearConstructorId} />
        <Spin spinning={isLoading}>
          <Empty />
        </Spin>
      </div>
    );
  return (
    <div className="px-8 py-6">
      <ArrowLeftOutlined className="text-xl" onClick={onClearConstructorId} />
      <Spin spinning={isLoading}>
        <div className="mt-6">
          <Badge
            constructorName={seasonStatistics.ConstructorStandings[0].Constructor.name}
            constructorId={seasonStatistics.ConstructorStandings[0].Constructor.constructorId}
            nationality={seasonStatistics?.ConstructorStandings[0].Constructor.nationality}
          />
          <Divider />
        </div>

        <div className="mt-6">
          <Bio
            nationality={seasonStatistics.ConstructorStandings[0].Constructor.nationality}
            firstTeamEntry={sortedStatistics[sortedStatistics.length - 1]?.season}
            constructorUrl={seasonStatistics?.ConstructorStandings[0].Constructor.url.split('/').pop() || ''}
          />
          <Divider />
        </div>

        <div className="mt-6">
          <SinceDebut
            totalChampionships={totalChampionships}
            totalRaceWins={totalRaceWins}
            seasons={sortedStatistics.length}
            firstTeamEntry={sortedStatistics[sortedStatistics.length - 1]?.season}
          />
          <Divider />
        </div>

        <div className="mt-6">
          <Drivers season={season} constructorId={seasonStatistics.ConstructorStandings[0].Constructor.constructorId} />
          <Divider />
        </div>

        <div className="mt-6">
          <SeasonStatistics statistics={sortedStatistics} />
        </div>
      </Spin>
    </div>
  );
};

export default Detail;
