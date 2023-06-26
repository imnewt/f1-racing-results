import { Driver } from './Driver';

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export interface ConstructorStatistic {
  ConstructorStandings: ConstructorStanding[];
  round: string;
  season: string;
}

export interface ConstructorDriver {
  Drivers: Driver[];
  constructorId: string;
  season: string;
}
