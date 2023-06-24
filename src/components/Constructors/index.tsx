import React, { useMemo } from 'react';

import { useFetchDrivers } from 'hooks/drivers';
import { useFetchConstructors } from 'hooks/constructors';

import ConstructorList from './ConstructorList';

export interface ConstructorsProps {
  season: string;
}

const Drivers: React.FC<ConstructorsProps> = ({ season }: ConstructorsProps) => {
  const { constructors, isLoading: isFetchingConstructors } = useFetchConstructors(season);
  const { drivers, isLoading: isFetchingDrivers } = useFetchDrivers(season);

  const isLoading = useMemo(() => {
    return isFetchingConstructors || isFetchingDrivers;
  }, [isFetchingConstructors, isFetchingDrivers]);

  return <ConstructorList constructors={constructors} drivers={drivers} isLoading={isLoading} />;
};

export default Drivers;
