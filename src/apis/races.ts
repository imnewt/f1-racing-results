import { BASE_URL } from 'utils/constants';

export const fetchRaces = (season: string) => async () => {
  const response = await fetch(`${BASE_URL}/${season}.json`);
  const data = await response.json();
  return data;
};
