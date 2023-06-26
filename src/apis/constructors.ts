import { BASE_URL } from 'utils/constants';

export const fetchConstructors =
  ({ season }: { season: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/${season}/constructorStandings.json`);
    const data = await response.json();
    return data;
  };

export const fetchConstructorAchivements =
  ({ constructorId }: { constructorId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/constructors/${constructorId}/results.json?limit=300`);
    const data = await response.json();
    return data;
  };

export const fetchConstructorSeasonStatistics =
  ({ season, constructorId }: { season: string; constructorId: string }) =>
  async () => {
    const response = await fetch(
      `${BASE_URL}/${season}/constructors/${constructorId}/constructorStandings.json?limit=500`
    );
    const data = await response.json();
    return data;
  };

export const fetchConstructorStatistics =
  ({ constructorId }: { constructorId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/constructors/${constructorId}/constructorStandings.json?limit=500`);
    const data = await response.json();
    return data;
  };

export const fetchConstructorDrivers =
  ({ season, constructorId }: { season: string; constructorId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/${season}/constructors/${constructorId}/drivers.json`);
    const data = await response.json();
    return data;
  };

export const fetchConstructorDescription =
  ({ constructorUrl }: { constructorUrl: string }) =>
  async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${constructorUrl
        .split('/')
        .pop()}`
    );
    const result = await response.text();
    const xmlDoc = new DOMParser().parseFromString(result, 'text/xml');
    return (xmlDoc.querySelector('extract') as HTMLElement).textContent;
  };
