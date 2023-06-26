import React, { useMemo } from 'react';
import { Spin, Typography } from 'antd';
import Chart from 'react-apexcharts';

import { useFetchDriverStatistics } from 'hooks/drivers';
import { DriverStatistic } from 'models/Driver';

const { Text } = Typography;

export interface SeasonStatisticsProps {
  driverId: string;
}

const SeasonStatistics: React.FC<SeasonStatisticsProps> = ({ driverId }: SeasonStatisticsProps) => {
  const { statistics, isLoading } = useFetchDriverStatistics({ driverId });

  const sortedStatistics = useMemo(() => {
    return (
      statistics?.sort(
        (prevSeason: DriverStatistic, nextSeason: DriverStatistic) => +prevSeason.season - +nextSeason.season
      ) || []
    );
  }, [statistics]);

  const chartXAxisCategories = useMemo(() => {
    return sortedStatistics.map((statistic: DriverStatistic) => statistic.season) || [];
  }, [sortedStatistics]);

  const chartYAxisRacesData = useMemo(() => {
    return sortedStatistics.map((statistic: DriverStatistic) => statistic.round) || [];
  }, [sortedStatistics]);

  const chartYAxisPointsData = useMemo(() => {
    return sortedStatistics.map((statistic: DriverStatistic) => statistic.DriverStandings[0].points) || [];
  }, [sortedStatistics]);

  const chartOptions = useMemo(() => {
    return {
      chart: {
        id: 'driver-multi-axis-chart',
      },
      xaxis: {
        categories: chartXAxisCategories,
      },
      yaxis: [
        {
          seriesName: 'Races',
          opposite: true,
          decimalsInFloat: 0,
          title: {
            text: 'Races',
            style: {
              fontSize: '1rem',
              fontWeight: 'bold',
            },
          },
        },
        {
          seriesName: 'Points',
          title: {
            text: 'Points',
            style: {
              fontSize: '1rem',
              fontWeight: 'bold',
            },
          },
        },
      ],
    };
  }, [chartXAxisCategories]);

  const chartSeries = useMemo(
    () => [
      {
        name: 'Races',
        data: chartYAxisRacesData,
        yAxis: 1,
      },
      {
        name: 'Points',
        data: chartYAxisPointsData,
      },
    ],
    [chartYAxisRacesData, chartYAxisPointsData]
  );

  return (
    <Spin spinning={isLoading}>
      <Text className="text-xl font-bold">Season Statistics</Text>
      <Chart options={chartOptions} series={chartSeries} type="line" width="100%" height={300} />
    </Spin>
  );
};

export default SeasonStatistics;
