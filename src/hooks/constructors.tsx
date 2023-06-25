import useSWR from 'swr';

import { fetchConstructors } from 'apis/constructors';
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
