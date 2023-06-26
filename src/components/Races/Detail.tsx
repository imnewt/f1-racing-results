import React from 'react';
import { Divider, Empty, Spin, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useFetchRaceDetail } from 'hooks/races';

import { RaceParams } from '.';
import Schedule from './Schedule';
import Circuit from '../Circuits';
import Badge from './Badge';

const { Text } = Typography;

export interface RaceDetailProps {
  season: string;
  raceParams: RaceParams;
  onClearRaceParams: () => void;
}

const RaceDetail: React.FC<RaceDetailProps> = ({ season, raceParams, onClearRaceParams }: RaceDetailProps) => {
  const { round = '', circuit = '' } = raceParams;
  const { race, isLoading: isFetchingRaceDetail } = useFetchRaceDetail({ season, round });

  if (!race)
    return (
      <div className="px-8 py-6">
        <div className="flex items-center">
          <ArrowLeftOutlined className="text-xl" onClick={onClearRaceParams} />
          <Text className="font-bold text-xl ml-4">Round {round}</Text>
        </div>
        <Spin spinning={isFetchingRaceDetail}>
          <Empty />
        </Spin>
      </div>
    );
  return (
    <div className="px-8 py-6">
      <div className="flex items-center">
        <ArrowLeftOutlined className="text-xl" onClick={onClearRaceParams} />
        <Text className="font-bold text-xl ml-4">Round {round}</Text>
      </div>
      <Spin spinning={isFetchingRaceDetail}>
        <div className="mt-6">
          <Badge season={season} country={race.Circuit.Location.country} raceName={race.raceName} />
          <Divider />
        </div>

        <div className="mt-6">
          <Schedule race={race} />
        </div>
        <Circuit race={race} circuit={circuit} />
      </Spin>
    </div>
  );
};

export default RaceDetail;
