import React from 'react';
import { Spin, Typography } from 'antd';

const { Text } = Typography;

export interface DetailedInfoProps {
  Icon: JSX.Element;
  title: string;
  content?: string | number;
  isLoading?: boolean;
}

const DetailedInfo: React.FC<DetailedInfoProps> = ({ Icon, title, content, isLoading = false }: DetailedInfoProps) => {
  return (
    <Spin spinning={isLoading}>
      <div className="flex my-2">
        <div className="text-lg mt-1">{Icon}</div>
        <div className="ml-4">
          <Text className="font-bold">{title}</Text>
          <br />
          <Text>{content}</Text>
        </div>
      </div>
    </Spin>
  );
};

export default DetailedInfo;
