import React from 'react';
import { Typography } from 'antd';

import { Race } from 'models/Race';
import FirstGrandPrix from './FirstGrandPrix';
import LapNumber from './LapNumber';
import LapRecord from './LapRecord';
import CircuitDescription from './CircuitDescription';

const { Text } = Typography;

export interface CircuitProps {
  race: Race;
  circuit: string;
}

const Circuit: React.FC<CircuitProps> = ({ race, circuit }: CircuitProps) => {
  return (
    <div className="mt-6">
      <Text className="text-lg font-bold">Circuit</Text>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-6/12 sm:mr-2">
          <div className="my-2 border p-4" style={{ height: '20rem' }}>
            <img
              src={`assets/img/tracks/${race.Circuit.circuitId}.svg`}
              alt={race.Circuit.circuitName}
              className="w-full h-full"
            />
          </div>
          <Text className="font-bold">{race.Circuit.circuitName}</Text> - <Text>{race.Circuit.Location.country}</Text>
        </div>
        <div className="w-full sm:w-6/12 sm:ml-2 mt-1">
          <FirstGrandPrix circuitId={race.Circuit.circuitId} />
          <LapNumber circuitId={race.Circuit.circuitId} />
          <LapRecord circuitId={race.Circuit.circuitId} />
          <CircuitDescription circuit={circuit} />
        </div>
      </div>
    </div>
  );
};

export default Circuit;
