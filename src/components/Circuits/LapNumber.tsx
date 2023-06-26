import React from 'react';
import { UndoOutlined } from '@ant-design/icons';

import { useFetchCircuit } from 'hooks/circuit';
import { DetailedInfo } from 'shared-components';

export interface LapNumberProps {
  circuitId: string;
}

const LapNumber: React.FC<LapNumberProps> = ({ circuitId }: LapNumberProps) => {
  const { circuit, isLoading } = useFetchCircuit({ circuitId });

  return (
    <DetailedInfo
      Icon={<UndoOutlined />}
      title="Lap Number"
      content={circuit?.laps || 'Not Available'}
      isLoading={isLoading}
    />
  );
};

export default LapNumber;
