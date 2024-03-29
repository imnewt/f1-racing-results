import useSWR from 'swr';

import {
  fetchDriverDescription,
  fetchDriverSeasonStatistics,
  fetchDriverStatistics,
  fetchDrivers,
  fetchDriverAchivements,
} from 'apis/drivers';
import { BASE_URL } from 'utils/constants';
import { Race } from 'models/Race';

export const useFetchDrivers = ({ season }: { season: string }) => {
  const { data, isValidating } = useSWR(`${BASE_URL}/${season}/driverStandings.json`, fetchDrivers({ season }));

  return { drivers: data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings, isLoading: isValidating };
};

export const useFetchDriverAchivements = ({ driverId }: { driverId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/drivers/${driverId}/results.json?limit=300`,
    fetchDriverAchivements({ driverId })
  );

  return {
    races: data?.MRData?.total,
    podiums: data?.MRData?.RaceTable?.Races?.filter((race: Race) => parseInt(race.Results[0].position) <= 3).length,
    wins: data?.MRData?.RaceTable?.Races?.filter((race: Race) => parseInt(race.Results[0].position) === 1).length,
    polePositions: data?.MRData?.RaceTable?.Races?.filter((race: Race) => parseInt(race.Results[0].grid) === 1).length,
    isLoading: isValidating,
  };
};

export const useFetchDriverStatistics = ({ driverId }: { driverId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/drivers/${driverId}/driverStandings.json?limit=60`,
    fetchDriverStatistics({ driverId })
  );

  return { statistics: data?.MRData?.StandingsTable?.StandingsLists, isLoading: isValidating };
};

export const useFetchDriverSeasonStatistics = ({ season, driverId }: { season: string; driverId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/${season}/drivers/${driverId}/driverStandings.json?limit=60`,
    fetchDriverSeasonStatistics({ season, driverId })
  );

  return { seasonStatistics: data?.MRData?.StandingsTable?.StandingsLists?.[0], isLoading: isValidating };
};

export const useFetchDriverDescription = ({ driverUrl }: { driverUrl: string }) => {
  const { data, isValidating } = useSWR(
    `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${driverUrl}`,
    fetchDriverDescription({ driverUrl })
  );

  return { description: data, isLoading: isValidating };
};
