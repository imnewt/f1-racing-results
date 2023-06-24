import { useCallback, useMemo } from 'react';
import { Typography } from 'antd';
import { DashboardOutlined, FlagOutlined, TeamOutlined } from '@ant-design/icons';
import classnames from 'classnames';

const { Text } = Typography;

export interface TabProps {
  tabKey: string;
  activeTab: string;
  onChangeTab: (tabKey: string) => void;
}

const handleGetTabIconByKey = (tabKey: string, color: string) => {
  switch (tabKey) {
    case 'drivers':
      return <TeamOutlined style={{ color }} />;
    case 'constructors':
      return <DashboardOutlined style={{ color }} />;
    case 'races':
    default:
      return <FlagOutlined style={{ color }} />;
  }
};

const handleGetTabNameByKey = (tabKey: string) => {
  switch (tabKey) {
    case 'drivers':
      return 'Drivers';
    case 'constructors':
      return 'Constructors';
    case 'races':
    default:
      return 'Races';
  }
};

const Tab: React.FC<TabProps> = ({ tabKey, activeTab, onChangeTab }: TabProps) => {
  const isActiveTab = useMemo(() => tabKey === activeTab, [tabKey, activeTab]);
  const tabIconColor = useMemo(() => (isActiveTab ? 'white' : 'black'), [isActiveTab]);

  const handleTabClick = useCallback(() => onChangeTab(tabKey), [tabKey, onChangeTab]);

  return (
    <div
      className={classnames(
        'text-center cursor-pointer overflow-hidden transition-colors ease-in-out duration-200 py-2',
        {
          'bg-primary': isActiveTab,
        }
      )}
      style={{ flexGrow: 1 }}
      onClick={handleTabClick}
    >
      <div className="text-red">{handleGetTabIconByKey(tabKey, tabIconColor)}</div>{' '}
      <Text
        className={classnames('block mt-1 transition-colors ease-in-out duration-200', {
          'text-white': isActiveTab,
        })}
      >
        {handleGetTabNameByKey(tabKey)}
      </Text>
    </div>
  );
};

export default Tab;
