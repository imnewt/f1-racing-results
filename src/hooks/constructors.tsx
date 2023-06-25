import useSWR from 'swr';

import {
  fetchConstructorAllStats,
  fetchConstructorDescription,
  fetchConstructorDrivers,
  fetchConstructors,
  fetchConstructorStat,
} from 'apis/constructors';
import { BASE_URL } from 'utils/constants';

export const useFetchConstructors = ({ season }: { season: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/${season}/constructorStandings.json`,
    fetchConstructors({ season })
  );

  return {
    constructors: data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings,
    isLoading: isValidating,
  };
};

export const useFetchConstructorDrivers = ({ season, constructorId }: { season: string; constructorId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/${season}/constructors/${constructorId}/drivers.json`,
    fetchConstructorDrivers({ season, constructorId })
  );

  return { constructorDrivers: data?.MRData?.DriverTable, isLoading: isValidating };
};

export const useFetchConstructorStat = ({ season, constructorId }: { season: string; constructorId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/${season}/constructors/${constructorId}/constructorStandings.json?limit=500`,
    fetchConstructorStat({ season, constructorId })
  );

  return { constructorStat: data?.MRData?.StandingsTable?.StandingsLists?.[0], isLoading: isValidating };
};

export const useFetchConstructorAllStats = ({ constructorId }: { constructorId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/constructors/${constructorId}/constructorStandings.json?limit=500`,
    fetchConstructorAllStats({ constructorId })
  );

  return { constructorStats: data?.MRData?.StandingsTable?.StandingsLists, isLoading: isValidating };
};

export const useFetchConstructorDescription = ({ constructorUrl }: { constructorUrl: string }) => {
  const { data, isValidating } = useSWR(
    `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${constructorUrl
      .split('/')
      .pop()}`,
    fetchConstructorDescription({ constructorUrl })
  );

  return { constructorDescription: data, isLoading: isValidating };
};
