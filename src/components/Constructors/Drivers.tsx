import React from 'react';
import { Spin, Typography } from 'antd';

import { useFetchConstructorDrivers } from 'hooks/constructors';

const { Text } = Typography;

export interface DriversProps {
  season: string;
  constructorId: string;
}

const Drivers: React.FC<DriversProps> = ({ season, constructorId }: DriversProps) => {
  const { drivers, isLoading } = useFetchConstructorDrivers({
    season,
    constructorId,
  });

  return (
    <Spin spinning={isLoading}>
      <Text className="text-xl font-bold">{drivers?.season} Drivers</Text>
      {drivers &&
        drivers.Drivers.map((driver: any) => (
          <div key={driver.driverId} className="flex items-center my-2">
            <div className={`flex justify-center rounded-md w-8 h-8 items-center team-${constructorId}`}>
              <Text className="text-white">{driver.permanentNumber}</Text>
            </div>
            <div className="ml-4">
              <Text>{driver.givenName}</Text>
              <br />
              <Text className="font-bold uppercase">{driver.familyName}</Text>
            </div>
          </div>
        ))}
    </Spin>
  );
};

export default Drivers;
