import { BASE_URL } from 'utils/constants';

export const fetchDrivers = (season: string) => async () => {
  const response = await fetch(`${BASE_URL}/${season}/driverStandings.json`);
  const data = await response.json();
  return data;
};
