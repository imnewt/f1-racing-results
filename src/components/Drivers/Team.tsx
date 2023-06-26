import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export interface TeamProps {
  season: string;
  constructorId: string;
  constructorName: string;
}

const Team: React.FC<TeamProps> = ({ season, constructorId, constructorName }: TeamProps) => {
  return (
    <>
      <div className="my-2">
        <Text className="text-xl font-bold ">{season} Team</Text>
      </div>
      <div className="flex items-center">
        <div style={{ width: '2.5rem', height: '1.75rem' }}>
          <img src={`assets/img/constructors/${constructorId}.svg`} alt={constructorName} className="w-full h-full" />
        </div>
        <Text className="ml-4">{constructorName}</Text>
      </div>
    </>
  );
};

export default Team;
