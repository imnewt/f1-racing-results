import React from 'react';
import { Typography } from 'antd';
import { CalendarOutlined, FileTextOutlined, GiftOutlined } from '@ant-design/icons';

import { useFetchDriverDescription } from 'hooks/drivers';
import { DetailedInfo } from 'shared-components';

const { Text } = Typography;

export interface BioProps {
  nationality: string;
  age: number;
  dOB: string;
  driverUrl: string;
}

const Bio: React.FC<BioProps> = ({ nationality, age, dOB, driverUrl }: BioProps) => {
  const { description, isLoading } = useFetchDriverDescription({
    driverUrl,
  });

  return (
    <>
      <Text className="text-xl font-bold">Bio</Text>
      <DetailedInfo
        Icon={
          <div className="rounded-md mt-2" style={{ width: '1.25rem', height: '0.875rem' }}>
            <img src={`assets/img/flags/${nationality}.svg`} alt={nationality} className="w-full h-full" />
          </div>
        }
        title="Nationality"
        content={nationality}
      />
      <DetailedInfo Icon={<GiftOutlined />} title="Age" content={age} />
      <DetailedInfo Icon={<CalendarOutlined />} title="DOB" content={dOB} />
      <DetailedInfo
        Icon={<FileTextOutlined />}
        title="Biography"
        content={description?.replace(/\. /g, '. \n\n')}
        isLoading={isLoading}
      />
    </>
  );
};

export default Bio;
