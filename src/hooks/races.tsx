import useSWR from 'swr';

import { fetchRaces } from 'apis/races';
import { BASE_URL } from 'utils/constants';

export const useFetchRaces = (season: string) => {
  const { data, isValidating } = useSWR(`${BASE_URL}/${season}.json`, fetchRaces(season));

  return { races: data?.MRData.RaceTable.Races, isLoading: isValidating };
};
