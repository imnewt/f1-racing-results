import React, { useState } from 'react';

import { useFetchDrivers } from 'hooks/drivers';
import List from './List';
import Detail from './Detail';

export interface DriversProps {
  season: string;
}

const Drivers: React.FC<DriversProps> = ({ season }: DriversProps) => {
  const [selectedDriverId, setSelectedDriverId] = useState<string>('');

  const { drivers, isLoading } = useFetchDrivers({ season });

  const handleDriverClick = (driverId: string) => {
    setSelectedDriverId(driverId);
  };

  const handleClearDriverId = () => {
    setSelectedDriverId('');
  };

  return selectedDriverId ? (
    <Detail season={season} driverId={selectedDriverId} onClearDriverId={handleClearDriverId} />
  ) : (
    <List drivers={drivers} isLoading={isLoading} onDriverClick={handleDriverClick} />
  );
};

export default Drivers;
