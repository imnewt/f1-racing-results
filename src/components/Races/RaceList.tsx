import React from 'react';
import { List, Spin, Typography } from 'antd';

import { Race } from 'models/Race';

const { Text } = Typography;

export interface RaceListProps {
  races: Race[];
  isLoading: boolean;
}

const RaceList: React.FC<RaceListProps> = ({ races, isLoading }: RaceListProps) => {
  return (
    <Spin spinning={isLoading}>
      <List
        dataSource={races}
        renderItem={(race) => (
          <div key={race.round} className="flex items-center hover:bg-blue-100 cursor-pointer px-4 py-2">
            <div className="text-center w-6">
              <Text>{race.round}.</Text>
            </div>
            <div className="mx-2 rounded" style={{ width: '2.5rem', height: '1.75rem' }}>
              <img
                src={`assets/img/flags/${race.Circuit.Location.country.replace(' ', '_')}.svg`}
                alt={race.Circuit.Location.country}
                className="w-full h-full"
              />
            </div>
            <div className="text-left" style={{ flexGrow: 1 }}>
              <Text className="font-bold">{race.Circuit.Location.country}</Text>
              <br />
              <Text>{race.raceName}</Text>
            </div>
            <div className="text-center w-8">
              <Text className="font-bold">{new Date(race.date).getDate()}</Text>
              <br />
              <Text>{new Date(race.date).toLocaleString('default', { month: 'short' })}</Text>
            </div>
          </div>
        )}
      />
    </Spin>
  );
};

export default RaceList;
