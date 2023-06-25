import React from 'react';
import { Spin, Typography } from 'antd';
import { UndoOutlined } from '@ant-design/icons';

import { useFetchCircuit } from 'hooks/circuit';

const { Text } = Typography;

export interface LapNumberProps {
  circuitId: string;
}

const LapNumber: React.FC<LapNumberProps> = ({ circuitId }: LapNumberProps) => {
  const { circuit, isLoading } = useFetchCircuit({ circuitId });

  return (
    <Spin spinning={isLoading}>
      <div className="flex mb-2">
        <UndoOutlined className="text-lg mt-1" />
        <div className="ml-4">
          <Text className="font-bold">Lap Number</Text>
          <br />
          <Text>{circuit?.laps || 'Not Available'}</Text>
        </div>
      </div>
    </Spin>
  );
};

export default LapNumber;
