import useSWR from 'swr';

import { fetchRaceDetail, fetchRaces } from 'apis/races';
import { BASE_URL } from 'utils/constants';

export const useFetchRaces = ({ season }: { season: string }) => {
  const { data, isValidating } = useSWR(`${BASE_URL}/${season}.json`, fetchRaces({ season }));

  return { races: data?.MRData.RaceTable.Races, isLoading: isValidating };
};

export const useFetchRaceDetail = ({ season, round }: { season: string; round: string }) => {
  const { data, isValidating } = useSWR(`${BASE_URL}/${season}/${round}.json`, fetchRaceDetail({ season, round }));

  return { race: data?.MRData?.RaceTable?.Races?.[0], isLoading: isValidating };
};
