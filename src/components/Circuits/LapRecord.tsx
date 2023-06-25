import React from 'react';
import { Spin, Typography } from 'antd';

import { FieldTimeOutlined } from '@ant-design/icons';
import { useFetchCircuitLapRecord } from 'hooks/circuit';

const { Text } = Typography;

export interface LapRecordProps {
  circuitId: string;
}

const LapRecord: React.FC<LapRecordProps> = ({ circuitId }: LapRecordProps) => {
  const { record, isLoading } = useFetchCircuitLapRecord({ circuitId });
  return (
    <Spin spinning={isLoading}>
      <div className="flex mb-2">
        <FieldTimeOutlined className="text-lg mt-1" />
        <div className="ml-4">
          <Text className="font-bold">Lap Record</Text>
          <br />
          <Text>
            {record
              ? `${record.Results[0].FastestLap.Time.time} (${record.Results[0].Driver.givenName} ${record.Results[0].Driver.familyName})`
              : 'Not Available'}
          </Text>
        </div>
      </div>
    </Spin>
  );
};

export default LapRecord;
