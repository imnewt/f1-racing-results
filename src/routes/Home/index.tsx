import { useState } from 'react';
import { Select, Typography } from 'antd';
import { Races } from 'components';
import Tab from './components/Tab';

const { Title, Text } = Typography;

const FIRST_SEASON = 1950;
const CURRENT_SEASON = new Date().getFullYear();
const SEASON_LIST = Array.from({ length: CURRENT_SEASON - FIRST_SEASON + 1 }, (_, index) => ({
  value: CURRENT_SEASON - index + '',
  label: CURRENT_SEASON - index + '',
}));
const TAB_KEYS = ['races', 'drivers', 'constructors'];

const Home = () => {
  const [season, setSeason] = useState<string>(CURRENT_SEASON + '');
  const [currentTab, setCurrentTab] = useState<string>('races');

  const handleChangeSeason = (selectedSeason: string) => {
    setSeason(selectedSeason);
  };

  const handleChangeTab = (tabKey: string) => {
    setCurrentTab(tabKey);
  };

  const renderContentByTab = () => {
    switch (currentTab) {
      case 'drivers':
        return <Races season={season} />;
      case 'constructors':
        return <Races season={season} />;
      case 'races':
      default:
        return <Races season={season} />;
    }
  };

  return (
    <div className="py-16 text-center">
      <div className="flex flex-col items-center w-full">
        <Title>F1 Racing Results</Title>
        <div>
          <Text>Select season:</Text>
          <Select defaultValue={season} options={SEASON_LIST} onChange={handleChangeSeason} className="ml-2" />
        </div>
      </div>
      <div className="border rounded mt-8 mx-16">
        <div className="flex border-b">
          {TAB_KEYS.map((tabKey) => (
            <Tab key={tabKey} tabKey={tabKey} activeTab={currentTab} onChangeTab={handleChangeTab} />
          ))}
        </div>
        {renderContentByTab()}
      </div>
    </div>
  );
};

export default Home;
