import React from 'react';
import { Badge, List, Spin, Typography } from 'antd';

import { DriverStanding } from 'models/Driver';

const { Text } = Typography;

export interface DriverListProps {
  drivers: DriverStanding[];
  isLoading: boolean;
}

const DriverList: React.FC<DriverListProps> = ({ drivers, isLoading }: DriverListProps) => {
  return (
    <Spin spinning={isLoading}>
      <List
        dataSource={drivers}
        renderItem={(driver) => (
          <div key={driver.Driver.driverId} className="flex items-center hover:bg-blue-100 cursor-pointer px-4 py-2">
            <div className="text-center w-6">{driver.position}.</div>
            <div className={`mx-2 team-line team-${driver.Constructors[0].constructorId}`} />
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

export default DriverList;