import React from 'react';
import { Spin, Typography } from 'antd';
import { BarChartOutlined, FieldTimeOutlined, FlagOutlined, TrophyOutlined } from '@ant-design/icons';

import { useFetchDriverAchivements } from 'hooks/drivers';
import { DetailedInfo } from 'shared-components';

const { Text } = Typography;

export interface OverviewProps {
  driverId: string;
}

const Overview: React.FC<OverviewProps> = ({ driverId }: OverviewProps) => {
  const { races, podiums, wins, polePositions, isLoading } = useFetchDriverAchivements({ driverId });

  return (
    <Spin spinning={isLoading}>
      <Text className="text-xl font-bold">Overview</Text>
      <DetailedInfo Icon={<FlagOutlined />} title="Races" content={races} isLoading={isLoading} />
      <DetailedInfo Icon={<TrophyOutlined />} title="Wins" content={wins} isLoading={isLoading} />
      <DetailedInfo Icon={<FieldTimeOutlined />} title="Pole" content={polePositions} isLoading={isLoading} />
      <DetailedInfo Icon={<BarChartOutlined />} title="Podiums" content={podiums} isLoading={isLoading} />
    </Spin>
  );
};

export default Overview;
