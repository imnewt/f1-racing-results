import { useState } from 'react';
import { Select, Tabs, TabsProps, Typography } from 'antd';
import { DashboardOutlined, FlagOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const FIRST_SEASON = 1950;
const CURRENT_SEASON = new Date().getFullYear();

const SEASON_LIST = Array.from({ length: CURRENT_SEASON - FIRST_SEASON + 1 }, (_, index) => ({
  value: CURRENT_SEASON - index,
  label: CURRENT_SEASON - index,
}));

const Home = () => {
  const [season, setSeason] = useState<number>(CURRENT_SEASON);
  const [currentTab, setCurrentTab] = useState<string>('races');

  const handleChangeSeason = (selectedSeason: number) => {
    setSeason(selectedSeason);
  };

  const handleChangeTab = (tabKey: string) => {
    setCurrentTab(tabKey);
  };

  const items: TabsProps['items'] = [
    {
      key: 'races',
      label: (
        <div className="flex items-center">
          <FlagOutlined />
          Races
        </div>
      ),
      children: `Content of Tab Pane 1`,
    },
    {
      key: 'drivers',
      label: (
        <div className="flex items-center">
          <TeamOutlined />
          Drivers
        </div>
      ),
      children: `Content of Tab Pane 2`,
    },
    {
      key: 'constructors',
      label: (
        <div className="flex items-center">
          <DashboardOutlined />
          Constructors
        </div>
      ),
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div className="my-8 text-center">
      <div className="flex flex-col items-center w-full">
        <Title>F1 Racing Results</Title>
        <div>
          <Text>Select season:</Text>
          <Select defaultValue={season} options={SEASON_LIST} onChange={handleChangeSeason} className="ml-2" />
        </div>
      </div>
      <div className="flex justify-center mx-auto mt-8">
        <Tabs defaultActiveKey={currentTab} items={items} onChange={handleChangeTab} type="card"></Tabs>
      </div>
    </div>
  );
};

export default Home;
