import React from 'react';
import { Badge, List, Spin, Typography } from 'antd';

import { Race } from 'models/Race';

const { Text } = Typography;

export interface RaceListProps {
  races: Race[];
  isLoading: boolean;
  onRaceClick: (round: string, country: string, circuit: string) => void;
}

const RaceList: React.FC<RaceListProps> = ({ races, isLoading, onRaceClick }: RaceListProps) => {
  return (
    <Spin spinning={isLoading}>
      <List
        dataSource={races}
        renderItem={(race) => (
          <div
            key={race.round}
            onClick={() => onRaceClick(race.round, race.Circuit.Location.country, race.Circuit.circuitName)}
            className="flex items-center hover:bg-blue-100 cursor-pointer px-4 py-2"
          >
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
              <Badge
                count={new Date(race.date).toLocaleString('default', { month: 'short' })}
                style={{ backgroundColor: '#1890FF' }}
              />
            </div>
          </div>
        )}
      />
    </Spin>
  );
};

export default RaceList;
