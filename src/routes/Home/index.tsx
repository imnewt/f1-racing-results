import { useState } from 'react';
import { Select, Typography } from 'antd';

import { Drivers, Races, Constructors } from 'components';
import Tab from './components/Tab';
import F1CarEvolution from 'assets/gifs/f1-car-evolution.gif';
import { FIRST_SEASON, CURRENT_SEASON } from 'utils/constants';

const { Title, Text } = Typography;

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
        return <Drivers season={season} />;
      case 'constructors':
        return <Constructors season={season} />;
      case 'races':
      default:
        return <Races season={season} />;
    }
  };

  return (
    <div className="py-16">
      <div className="flex flex-col items-center w-full">
        <Title style={{ margin: 0 }}>F1 Racing Results</Title>
        <img className="mb-2" style={{ width: '5rem' }} src={F1CarEvolution} alt="F1 Car Evolution" />
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
