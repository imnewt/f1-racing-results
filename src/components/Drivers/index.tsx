import React, { useState } from 'react';

import { useFetchDrivers } from 'hooks/drivers';
import DriverList from './DriverList';
import DriverDetail from './DriverDetail';

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
    <DriverDetail season={season} driverId={selectedDriverId} onClearDriverId={handleClearDriverId} />
  ) : (
    <DriverList drivers={drivers} isLoading={isLoading} onDriverClick={handleDriverClick} />
  );
};

export default Drivers;
