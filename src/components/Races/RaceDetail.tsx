import React from 'react';
import { Empty, Spin, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useFetchRaceDetail } from 'hooks/races';

import { RaceParams } from '.';
import RaceWeekend from './RaceWeekend';
import Circuit from '../Circuits';

const { Text } = Typography;

export interface RaceDetailProps {
  season: string;
  raceParams: RaceParams;
  onClearRaceParams: () => void;
}

const RaceDetail: React.FC<RaceDetailProps> = ({ season, raceParams, onClearRaceParams }: RaceDetailProps) => {
  const { round = '', circuit = '' } = raceParams;
  const { race, isLoading: isFetchingRaceDetail } = useFetchRaceDetail({ season, round });

  if (!race || !race.FirstPractice || !race.FirstPractice.time)
    return (
      <Spin spinning={isFetchingRaceDetail}>
        <Empty />
      </Spin>
    );
  return (
    <div className="px-8 py-6">
      <ArrowLeftOutlined className="text-xl" onClick={onClearRaceParams} />
      <Spin spinning={isFetchingRaceDetail}>
        <div className="mt-6">
          <div className="flex items-center">
            <div className="rounded" style={{ width: '5rem', height: '3.5rem' }}>
              <img
                src={`assets/img/flags/${race.Circuit.Location.country.replace(/\s+/g, '_')}.svg`}
                alt={race.Circuit.Location.country}
                className="w-full h-full"
              />
            </div>
            <div className="ml-4">
              <Text className="text-lg">
                <Text className="text-lg font-bold">{race.Circuit.Location.country}</Text> {season}
              </Text>
              <br />
              <Text>{race.raceName}</Text>
            </div>
          </div>
          <RaceWeekend race={race} />
          <Circuit race={race} circuit={circuit} />
        </div>
      </Spin>
    </div>
  );
};

export default RaceDetail;
