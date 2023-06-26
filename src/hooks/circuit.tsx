import useSWR from 'swr';

import { fetchCircuit, fetchCircuitDescription, fetchCircuitLapRecord, fetchCircuitRaces } from 'apis/circuit';
import { BASE_URL } from 'utils/constants';
import { RaceResult } from 'models/Race';

export const useFetchCircuitDescription = ({ circuit }: { circuit: string }) => {
  const { data, isValidating } = useSWR(
    `https://en.wikipedia.org/w/api.php?origin=*&format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${circuit}`,
    fetchCircuitDescription({ circuit })
  );

  return { description: data, isLoading: isValidating };
};

export const useFetchCircuitRaces = ({ circuitId }: { circuitId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/circuits/${circuitId}/races.json`,
    fetchCircuitRaces({ circuitId })
  );

  return { races: data?.MRData?.RaceTable?.Races, isLoading: isValidating };
};

export const useFetchCircuit = ({ circuitId }: { circuitId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/circuits/${circuitId}/results/1.json?limit=100`,
    fetchCircuit({ circuitId })
  );

  const circuit =
    data?.MRData?.RaceTable?.Races?.length > 0 ? data?.MRData.RaceTable.Races.pop().Results[0] : undefined;

  return { circuit, isLoading: isValidating };
};

export const useFetchCircuitLapRecord = ({ circuitId }: { circuitId: string }) => {
  const { data, isValidating } = useSWR(
    `${BASE_URL}/circuits/${circuitId}/fastest/1/results.json`,
    fetchCircuitLapRecord({ circuitId })
  );

  const record =
    data?.MRData?.RaceTable?.Races?.length > 0
      ? data?.MRData?.RaceTable?.Races?.reduce((prev: RaceResult, curr: RaceResult) =>
          prev.Results[0].FastestLap.Time.time < curr.Results[0].FastestLap.Time.time ? prev : curr
        )
      : undefined;

  return {
    record,
    isLoading: isValidating,
  };
};
