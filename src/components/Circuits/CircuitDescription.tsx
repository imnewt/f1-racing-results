import React from 'react';
import { Spin, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import { useFetchCircuitDescription } from 'hooks/circuit';

const { Text } = Typography;

export interface CircuitDescriptionProps {
  circuit: string;
}

const CircuitDescription: React.FC<CircuitDescriptionProps> = ({ circuit }: CircuitDescriptionProps) => {
  const { circuitDescription, isLoading } = useFetchCircuitDescription({ circuit });

  return (
    <Spin spinning={isLoading}>
      <div className="flex">
        <CalendarOutlined className="text-lg mt-1" />
        <div className="ml-4">
          <Text className="font-bold">Description</Text>
          <br />
          <Text>{circuitDescription?.replace(/\. /g, '. \n\n')}</Text>
        </div>
      </div>
    </Spin>
  );
};

export default CircuitDescription;
