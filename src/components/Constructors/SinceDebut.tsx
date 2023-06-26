import React from 'react';
import { Typography } from 'antd';
import { CalendarOutlined, DashboardOutlined, FlagOutlined, TrophyOutlined } from '@ant-design/icons';

import { DetailedInfo } from 'shared-components';

const { Text } = Typography;

export interface SinceDebutProps {
  totalChampionships: number;
  totalRaceWins: number;
  seasons: number;
  firstTeamEntry: string;
}

const SinceDebut: React.FC<SinceDebutProps> = ({
  totalChampionships,
  totalRaceWins,
  seasons,
  firstTeamEntry,
}: SinceDebutProps) => {
  return (
    <>
      <Text className="text-xl font-bold">Since Debut</Text>
      <DetailedInfo Icon={<TrophyOutlined />} title="Championships" content={totalChampionships} />
      <DetailedInfo Icon={<FlagOutlined />} title="Race Wins" content={totalRaceWins} />
      <DetailedInfo Icon={<DashboardOutlined />} title="Seasons" content={seasons} />
      <DetailedInfo Icon={<CalendarOutlined />} title="First Team Entry" content={firstTeamEntry} />
    </>
  );
};

export default SinceDebut;
