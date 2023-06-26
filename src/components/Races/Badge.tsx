import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export interface BadgeProps {
  season: string;
  country: string;
  raceName: string;
}

const Badge: React.FC<BadgeProps> = ({ season, country, raceName }: BadgeProps) => {
  return (
    <div className="flex items-center">
      <div className="rounded" style={{ width: '5rem', height: '3.5rem' }}>
        <img src={`assets/img/flags/${country.replace(/\s+/g, '_')}.svg`} alt={country} className="w-full h-full" />
      </div>
      <div className="ml-4">
        <Text className="text-lg">
          <Text className="text-lg font-bold">{country}</Text> {season}
        </Text>
        <br />
        <Text>{raceName}</Text>
      </div>
    </div>
  );
};

export default Badge;
