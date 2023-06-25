import React from 'react';

import { useFetchDrivers } from 'hooks/drivers';
import DriverList from './DriverList';

export interface DriversProps {
  season: string;
}

const Drivers: React.FC<DriversProps> = ({ season }: DriversProps) => {
  const { drivers, isLoading } = useFetchDrivers({ season });

  return <DriverList drivers={drivers} isLoading={isLoading} />;
};

export default Drivers;
