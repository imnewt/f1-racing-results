import useSWR from 'swr';

import { fetchDrivers } from 'apis/drivers';
import { BASE_URL } from 'utils/constants';

export const useFetchDrivers = ({ season }: { season: string }) => {
  const { data, isValidating } = useSWR(`${BASE_URL}/${season}/driverStandings.json`, fetchDrivers({ season }));

  return { drivers: data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings, isLoading: isValidating };
};
