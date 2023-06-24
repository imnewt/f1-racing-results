import { Circuit } from './Circuit';
import { Constructor } from './Constructor';
import { Driver } from './Driver';

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: Date;
  time: string;
  QualifyingResults: QualifyingResult[];
  Results: Result[];
  FirstPractice: Session;
  SecondPractice: Session;
  ThirdPractice?: Session;
  Qualifying: Session;
  Sprint?: Session;
  SprintResults?: SprintResult[];
}

export interface Session {
  date: Date;
  time: string;
}

export interface SprintResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: Status;
  Time?: SprintResultTime;
  FastestLap?: FastestLap;
}

export interface SprintResultTime {
  millis: string;
  time: string;
}

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2?: string;
  Q3?: string;
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: ResultTime;
  FastestLap: FastestLap;
}

export interface ResultTime {
  millis: string;
  time: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: FastestLapTime;
  AverageSpeed: AverageSpeed;
}

export interface FastestLapTime {
  time: string;
}

export interface AverageSpeed {
  units: Units;
  speed: string;
}

export enum Units {
  Kph = 'kph',
}

export enum Status {
  Finished = 'Finished',
  Retired = 'Retired',
}
