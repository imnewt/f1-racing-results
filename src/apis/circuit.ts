import { BASE_URL } from 'utils/constants';

export const fetchCircuitDescription =
  ({ circuit }: { circuit: string }) =>
  async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${circuit}`
    );
    const result = await response.text();
    const xmlDoc = new DOMParser().parseFromString(result, 'text/xml');
    return (xmlDoc.querySelector('extract') as HTMLElement).textContent;
  };

export const fetchCircuitRaces =
  ({ circuitId }: { circuitId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/circuits/${circuitId}/races.json`);
    const data = await response.json();
    return data;
  };

export const fetchCircuit =
  ({ circuitId }: { circuitId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/circuits/${circuitId}/results/1.json?limit=100`);
    const data = await response.json();
    return data;
  };

export const fetchCircuitLapRecord =
  ({ circuitId }: { circuitId: string }) =>
  async () => {
    const response = await fetch(`${BASE_URL}/circuits/${circuitId}/fastest/1/results.json`);
    const data = await response.json();
    return data;
  };
