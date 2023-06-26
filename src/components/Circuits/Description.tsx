import React from 'react';
import { FileTextOutlined } from '@ant-design/icons';

import { useFetchCircuitDescription } from 'hooks/circuit';
import { DetailedInfo } from 'shared-components';

export interface DescriptionProps {
  circuit: string;
}

const Description: React.FC<DescriptionProps> = ({ circuit }: DescriptionProps) => {
  const { description, isLoading } = useFetchCircuitDescription({ circuit });

  return (
    <DetailedInfo
      Icon={<FileTextOutlined />}
      title="Description"
      content={description?.replace(/\. /g, '. \n\n')}
      isLoading={isLoading}
    />
  );
};

export default Description;
