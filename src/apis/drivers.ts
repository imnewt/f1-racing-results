import { BASE_URL } from 'utils/constants';

export const fetchDrivers =
  ({ season }: { season: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/${season}/driverStandings.json`);
    const data = await response.json();
    return data;
  };

export const fetchDriverAchivements =
  ({ driverId }: { driverId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/drivers/${driverId}/results.json?limit=300`);
    const data = await response.json();
    return data;
  };

export const fetchDriverAllStats =
  ({ driverId }: { driverId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/drivers/${driverId}/driverStandings.json?limit=60`);
    const data = await response.json();
    return data;
  };

export const fetchDriverStat =
  ({ season, driverId }: { season: string; driverId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/${season}/drivers/${driverId}/driverStandings.json?limit=60`);
    const data = await response.json();
    return data;
  };

export const fetchDriverDescription =
  ({ driverUrl }: { driverUrl: string }) =>
  async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${driverUrl}`
    );
    const result = await response.text();
    const xmlDoc = new DOMParser().parseFromString(result, 'text/xml');
    return (xmlDoc.querySelector('extract') as HTMLElement).textContent;
  };
