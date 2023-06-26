import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export interface BadgeProps {
  constructorId: string;
  permanentNumber: string;
  givenName: string;
  familyName: string;
  nationality: string;
}

const Badge: React.FC<BadgeProps> = ({
  constructorId,
  permanentNumber,
  givenName,
  familyName,
  nationality,
}: BadgeProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className={`flex justify-center rounded-md w-8 h-8 items-center team-${constructorId}`}>
          <Text className="text-white">{permanentNumber}</Text>
        </div>
        <div className="ml-4">
          <Text>{givenName}</Text>
          <br />
          <Text className="font-bold uppercase">{familyName}</Text>
        </div>
      </div>
      <div className="rounded-md" style={{ width: '2.5rem', height: '1.75rem' }}>
        <img src={`assets/img/flags/${nationality}.svg`} alt={nationality} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Badge;
