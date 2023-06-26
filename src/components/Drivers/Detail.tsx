import React from 'react';
import { Divider, Empty, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useFetchDriverSeasonStatistics } from 'hooks/drivers';
import Overview from './Overview';
import SeasonStatistics from './SeasonStatistics';
import Bio from './Bio';
import Badge from './Badge';
import Team from './Team';

export interface DetailProps {
  season: string;
  driverId: string;
  onClearDriverId: () => void;
}

const Detail: React.FC<DetailProps> = ({ season, driverId, onClearDriverId }: DetailProps) => {
  const { seasonStatistics, isLoading } = useFetchDriverSeasonStatistics({ season, driverId });

  if (!seasonStatistics)
    return (
      <div className="px-8 py-6">
        <ArrowLeftOutlined className="text-xl" onClick={onClearDriverId} />
        <Spin spinning={isLoading}>
          <Empty />
        </Spin>
      </div>
    );
  return (
    <div className="px-8 py-6">
      <ArrowLeftOutlined className="text-xl" onClick={onClearDriverId} />
      <Spin spinning={isLoading}>
        <div className="mt-6">
          <Badge
            constructorId={seasonStatistics?.DriverStandings[0].Constructors[0].constructorId}
            permanentNumber={seasonStatistics?.DriverStandings[0].Driver.permanentNumber}
            givenName={seasonStatistics?.DriverStandings[0].Driver.givenName}
            familyName={seasonStatistics?.DriverStandings[0].Driver.familyName}
            nationality={seasonStatistics?.DriverStandings[0].Driver.nationality}
          />
          <Divider />
        </div>

        <div className="mt-6">
          <Bio
            nationality={seasonStatistics.DriverStandings[0].Driver.nationality}
            age={
              new Date().getFullYear() - new Date(seasonStatistics.DriverStandings[0].Driver.dateOfBirth).getFullYear()
            }
            dOB={new Intl.DateTimeFormat('en-GB').format(
              new Date(seasonStatistics.DriverStandings[0].Driver.dateOfBirth)
            )}
            driverUrl={seasonStatistics?.DriverStandings?.[0]?.Driver?.url?.split('/').pop() || ''}
          />
          <Divider />
        </div>

        <div className="mt-6">
          <Overview driverId={seasonStatistics.DriverStandings[0].Driver.driverId} />
          <Divider />
        </div>

        <div className="mt-6">
          <Team
            season={season}
            constructorId={seasonStatistics?.DriverStandings[0].Constructors[0].constructorId}
            constructorName={seasonStatistics?.DriverStandings[0].Constructors[0].name}
          />
          <Divider />
        </div>

        <div className="mt-6">
          <SeasonStatistics driverId={driverId} />
        </div>
      </Spin>
    </div>
  );
};

export default Detail;
