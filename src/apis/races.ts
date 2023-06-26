import { BASE_URL } from 'utils/constants';

export const fetchRaces =
  ({ season }: { season: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/${season}.json`);
    const data = await response.json();
    return data;
  };

export const fetchRaceDetail =
  ({ season, round }: { season: string; round: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/${season}/${round}.json`);
    const data = await response.json();
    return data;
  };
