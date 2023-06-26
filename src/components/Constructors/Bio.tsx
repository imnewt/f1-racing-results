import React from 'react';
import { Typography } from 'antd';
import { CalendarOutlined, FileTextOutlined } from '@ant-design/icons';

import { useFetchConstructorDescription } from 'hooks/constructors';
import { DetailedInfo } from 'shared-components';

const { Text } = Typography;

export interface BioProps {
  nationality: string;
  firstTeamEntry: string;
  constructorUrl: string;
}

const Bio: React.FC<BioProps> = ({ nationality, firstTeamEntry, constructorUrl }: BioProps) => {
  const { description, isLoading: isFetchingConstructorDescriptions } = useFetchConstructorDescription({
    constructorUrl,
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
      <DetailedInfo Icon={<CalendarOutlined />} title="First Team Entry" content={firstTeamEntry} />
      <DetailedInfo
        Icon={<FileTextOutlined />}
        title="Biography"
        content={description?.replace(/\. /g, '. \n\n')}
        isLoading={isFetchingConstructorDescriptions}
      />
    </>
  );
};

export default Bio;
