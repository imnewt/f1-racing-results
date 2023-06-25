import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';

import { useFetchCircuitRaces } from 'hooks/circuit';
import { DetailedInfo } from 'shared-components';

export interface FirstGrandPrixProps {
  circuitId: string;
}

const FirstGrandPrix: React.FC<FirstGrandPrixProps> = ({ circuitId }: FirstGrandPrixProps) => {
  const { races = [], isLoading } = useFetchCircuitRaces({ circuitId });

  return (
    <DetailedInfo
      Icon={<CalendarOutlined />}
      title="First Grand Prix"
      content={races[0]?.season}
      isLoading={isLoading}
    />
  );
};

export default FirstGrandPrix;
