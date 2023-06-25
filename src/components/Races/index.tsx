import React, { useMemo, useState } from 'react';

import { useFetchRaces } from 'hooks/races';
import RaceList from './RaceList';
import RaceDetail from './RaceDetail';

export interface RacesProps {
  season: string;
}

export interface RaceParams {
  round?: string;
  country?: string;
  circuit?: string;
}

const Races: React.FC<RacesProps> = ({ season }: RacesProps) => {
  const [raceParams, setRaceParams] = useState<RaceParams>({});

  const { races, isLoading: isFetchingRaces } = useFetchRaces({ season });

  const hasSelectedRace = useMemo(() => !!Object.keys(raceParams).length, [raceParams]);

  const handleRaceClick = (round: string, country: string, circuit: string) => {
    setRaceParams({ round, country, circuit });
  };

  const handleClearRaceParams = () => {
    setRaceParams({});
  };

  return (
    <>
      {hasSelectedRace ? (
        <RaceDetail season={season} raceParams={raceParams} onClearRaceParams={handleClearRaceParams} />
      ) : (
        <RaceList races={races} isLoading={isFetchingRaces} onRaceClick={handleRaceClick} />
      )}
    </>
  );
};

export default Races;
