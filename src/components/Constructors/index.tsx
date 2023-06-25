import React, { useMemo, useState } from 'react';

import { useFetchDrivers } from 'hooks/drivers';
import { useFetchConstructors } from 'hooks/constructors';

import ConstructorList from './ConstructorList';
import ConstructorDetail from './ConstructorDetail';

export interface ConstructorsProps {
  season: string;
}

const Drivers: React.FC<ConstructorsProps> = ({ season }: ConstructorsProps) => {
  const [selectedConstructorId, setSelectedConstructorId] = useState<string>('');

  const { constructors, isLoading: isFetchingConstructors } = useFetchConstructors({ season });
  const { drivers, isLoading: isFetchingDrivers } = useFetchDrivers({ season });

  const isLoading = useMemo(() => {
    return isFetchingConstructors || isFetchingDrivers;
  }, [isFetchingConstructors, isFetchingDrivers]);

  const handleConstructorClick = (constructorId: string) => {
    setSelectedConstructorId(constructorId);
  };

  const handleClearConstructorId = () => {
    setSelectedConstructorId('');
  };

  return selectedConstructorId ? (
    <ConstructorDetail
      season={season}
      constructorId={selectedConstructorId}
      onClearConstructorId={handleClearConstructorId}
    />
  ) : (
    <ConstructorList
      constructors={constructors}
      drivers={drivers}
      isLoading={isLoading}
      onConstructorClick={handleConstructorClick}
    />
  );
};

export default Drivers;
