import React from 'react';

import { useFetchRaces } from 'hooks/races';
import RaceList from './RaceList';

export interface RacesProps {
  season: string;
}

const Races: React.FC<RacesProps> = ({ season }: RacesProps) => {
  const { races, isLoading } = useFetchRaces(season);

  return <RaceList races={races} isLoading={isLoading} />;
};

export default Races;
