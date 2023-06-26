import React, { useCallback } from 'react';
import { Badge, List as AntList, Spin, Typography } from 'antd';

import { ConstructorStanding } from 'models/Constructor';
import { DriverStanding } from 'models/Driver';

const { Text } = Typography;

export interface ListProps {
  constructors: ConstructorStanding[];
  drivers: DriverStanding[];
  isLoading: boolean;
  onConstructorClick: (constructorId: string) => void;
}

const List: React.FC<ListProps> = ({ constructors, drivers, isLoading, onConstructorClick }: ListProps) => {
  const handleGetDriverNames = useCallback(
    (constructorId: string) => {
      return drivers
        ?.filter((driver) => driver.Constructors[0].constructorId === constructorId)
        .slice(0, 2)
        .map<React.ReactNode>((driver) => driver.Driver.familyName)
        .join(' / ');
    },
    [drivers]
  );

  return (
    <Spin spinning={isLoading}>
      <AntList
        dataSource={constructors}
        renderItem={(constructor) => (
          <div
            key={constructor.Constructor.constructorId}
            onClick={() => onConstructorClick(constructor.Constructor.constructorId)}
            className="flex items-center hover:bg-blue-100 cursor-pointer p-4 border-b"
          >
            <div className="text-center w-6">{constructor.position}.</div>
            <div className="mx-2 rounded" style={{ width: '2.5rem', height: '1.75rem' }}>
              <img
                src={`assets/img/constructors/${constructor.Constructor.constructorId}.svg`}
                alt={constructor.Constructor.name}
                className="w-full h-full"
              />
            </div>
            <div className="text-left" style={{ flexGrow: 1 }}>
              <Text className="font-bold uppercase">{constructor.Constructor.name}</Text>
              <br />
              <Text>{handleGetDriverNames(constructor.Constructor.constructorId)}</Text>
            </div>
            <Badge
              count={constructor.points}
              overflowCount={Infinity}
              showZero
              style={{ backgroundColor: '#1890FF' }}
            />
          </div>
        )}
      />
    </Spin>
  );
};

export default List;
