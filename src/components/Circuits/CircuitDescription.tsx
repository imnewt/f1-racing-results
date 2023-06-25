import React from 'react';
import { FileTextOutlined } from '@ant-design/icons';

import { useFetchCircuitDescription } from 'hooks/circuit';
import { DetailedInfo } from 'shared-components';

export interface CircuitDescriptionProps {
  circuit: string;
}

const CircuitDescription: React.FC<CircuitDescriptionProps> = ({ circuit }: CircuitDescriptionProps) => {
  const { circuitDescription, isLoading } = useFetchCircuitDescription({ circuit });

  return (
    <DetailedInfo
      Icon={<FileTextOutlined />}
      title="Description"
      content={circuitDescription?.replace(/\. /g, '. \n\n')}
      isLoading={isLoading}
    />
  );
};

export default CircuitDescription;
