import useSWR from 'swr';

import {
  fetchConstructorStatistics,
  fetchConstructorDescription,
  fetchConstructorDrivers,
  fetchConstructors,
  fetchConstructorSeasonStatistics,
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

  return { drivers: data?.MRData?.DriverTable, isLoading: isValidating };
};

export const useFetchConstructorSeasonStatistics = ({
  season,
  constructorId,
}: {
  season: string;
  constructorId: string;
}) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/${season}/constructors/${constructorId}/constructorStandings.json?limit=500`,
    fetchConstructorSeasonStatistics({ season, constructorId })
  );

  return { seasonStatistics: data?.MRData?.StandingsTable?.StandingsLists?.[0], isLoading: isValidating };
};

export const useFetchConstructorStatistics = ({ constructorId }: { constructorId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/constructors/${constructorId}/constructorStandings.json?limit=500`,
    fetchConstructorStatistics({ constructorId })
  );

  return { statistics: data?.MRData?.StandingsTable?.StandingsLists, isLoading: isValidating };
};

export const useFetchConstructorDescription = ({ constructorUrl }: { constructorUrl: string }) => {
  const { data, isValidating } = useSWR(
    `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${constructorUrl
      .split('/')
      .pop()}`,
    fetchConstructorDescription({ constructorUrl })
  );

  return { description: data, isLoading: isValidating };
};
