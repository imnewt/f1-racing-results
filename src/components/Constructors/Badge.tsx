import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export interface BadgeProps {
  constructorName: string;
  constructorId: string;
  nationality: string;
}

const Badge: React.FC<BadgeProps> = ({ constructorName, constructorId, nationality }: BadgeProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="rounded-md" style={{ width: '2.5rem', height: '1.75rem' }}>
          <img src={`assets/img/constructors/${constructorId}.svg`} alt={constructorName} className="w-full h-full" />
        </div>
        <div className="ml-4">
          <Text className="font-bold uppercase">{constructorName}</Text>
        </div>
      </div>
      <div className="rounded-md" style={{ width: '2.5rem', height: '1.75rem' }}>
        <img src={`assets/img/flags/${nationality}.svg`} alt={nationality} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Badge;
