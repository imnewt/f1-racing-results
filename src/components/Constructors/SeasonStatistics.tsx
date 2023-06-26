import React, { useMemo } from 'react';
import { Typography } from 'antd';
import Chart from 'react-apexcharts';

import { ConstructorStatistic } from 'models/Constructor';

const { Text } = Typography;

export interface SeasonStatisticsProps {
  statistics: ConstructorStatistic[];
}

const SeasonStatistics: React.FC<SeasonStatisticsProps> = ({ statistics }: SeasonStatisticsProps) => {
  const chartXAxisCategories = useMemo(() => {
    return statistics.map((statistic: ConstructorStatistic) => statistic.season) || [];
  }, [statistics]);

  const chartYAxisWinsData = useMemo(() => {
    return statistics.map((statistic: ConstructorStatistic) => +statistic.ConstructorStandings[0].wins) || [];
  }, [statistics]);

  const chartYAxisPointsData = useMemo(() => {
    return statistics.map((statistic: ConstructorStatistic) => +statistic.ConstructorStandings[0].points) || [];
  }, [statistics]);

  const chartOptions = useMemo(() => {
    return {
      chart: {
        id: 'constructor-multi-axis-chart',
      },
      xaxis: {
        categories: chartXAxisCategories,
      },
      yaxis: [
        {
          seriesName: 'Wins',
          opposite: true,
          decimalsInFloat: 0,
          title: {
            text: 'Wins',
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
        name: 'Wins',
        data: chartYAxisWinsData,
        yAxis: 1,
      },
      {
        name: 'Points',
        data: chartYAxisPointsData,
      },
    ],
    [chartYAxisWinsData, chartYAxisPointsData]
  );

  return (
    <>
      <Text className="text-xl font-bold">Season Statistics</Text>
      <Chart options={chartOptions} series={chartSeries} type="line" height={300} />
    </>
  );
};

export default SeasonStatistics;
