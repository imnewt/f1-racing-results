import { Race } from 'models/Race';
import { useEffect, useState } from 'react';

export const useFetchRaces = (season: string) => {
  const [races, setRaces] = useState<Race[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ergast.com/api/f1/${season}.json`)
      .then((res) => res.json())
      .then((result) => {
        setRaces(result.MRData.RaceTable.Races);
        setIsLoading(false);
      });
  }, [season]);

  return { races, isLoading };
};
