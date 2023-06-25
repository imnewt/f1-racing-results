import React from 'react';
import { Spin, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import { useFetchCircuitRaces } from 'hooks/circuit';

const { Text } = Typography;

export interface FirstGrandPrixProps {
  circuitId: string;
}

const FirstGrandPrix: React.FC<FirstGrandPrixProps> = ({ circuitId }: FirstGrandPrixProps) => {
  const { races = [], isLoading } = useFetchCircuitRaces({ circuitId });

  return (
    <Spin spinning={isLoading}>
      <div className="flex mb-2">
        <CalendarOutlined className="text-lg mt-1" />
        <div className="ml-4">
          <Text className="font-bold">First Grand Prix</Text>
          <br />
          <Text>{races[0]?.season}</Text>
        </div>
      </div>
    </Spin>
  );
};

export default FirstGrandPrix;
