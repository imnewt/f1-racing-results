import { BASE_URL } from 'utils/constants';

export const fetchConstructors =
  ({ season }: { season: string }) =>
  async () => {
    const constructorsResponse = await fetch(`${BASE_URL}/${season}/constructorStandings.json`);
    const constructorsData = await constructorsResponse.json();
    return constructorsData;
  };
