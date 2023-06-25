import React from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';

import { useFetchCircuitLapRecord } from 'hooks/circuit';
import { DetailedInfo } from 'shared-components';

export interface LapRecordProps {
  circuitId: string;
}

const LapRecord: React.FC<LapRecordProps> = ({ circuitId }: LapRecordProps) => {
  const { record, isLoading } = useFetchCircuitLapRecord({ circuitId });
  return (
    <DetailedInfo
      Icon={<FieldTimeOutlined />}
      title="Lap Record"
      content={
        record
          ? `${record.Results[0].FastestLap.Time.time} (${record.Results[0].Driver.givenName} ${record.Results[0].Driver.familyName})`
          : 'Not Available'
      }
      isLoading={isLoading}
    />
  );
};

export default LapRecord;
