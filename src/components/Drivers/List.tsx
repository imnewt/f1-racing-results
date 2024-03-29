import React from 'react';
import { Badge, List as AntList, Spin, Typography } from 'antd';

import { DriverStanding } from 'models/Driver';

const { Text } = Typography;

export interface ListProps {
  drivers: DriverStanding[];
  isLoading: boolean;
  onDriverClick: (driverId: string) => void;
}

const List: React.FC<ListProps> = ({ drivers, isLoading, onDriverClick }: ListProps) => {
  return (
    <Spin spinning={isLoading}>
      <AntList
        dataSource={drivers}
        renderItem={(driver) => (
          <div
            key={driver.Driver.driverId}
            onClick={() => onDriverClick(driver.Driver.driverId)}
            className="flex items-center hover:bg-blue-100 cursor-pointer p-4 border-b"
          >
            <div className="text-center w-6">{driver.position}.</div>
            <div className={`mx-2 team-line team-${driver.Constructors[0].constructorId} bg-black`} />
            <div className="text-left" style={{ flexGrow: 1 }}>
              <Text>
                {driver.Driver.givenName} <Text className="font-bold">{driver.Driver.familyName}</Text>
              </Text>
              <br />
              <Text>{driver.Constructors[0].name}</Text>
            </div>
            <Badge count={driver.points} overflowCount={Infinity} showZero style={{ backgroundColor: '#1890FF' }} />
          </div>
        )}
      />
    </Spin>
  );
};

export default List;
