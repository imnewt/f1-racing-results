import React from 'react';
import { Badge, Divider, Typography } from 'antd';

import { Race } from 'models/Race';

const { Text } = Typography;

export interface ScheduleProps {
  race: Race;
}

const Schedule: React.FC<ScheduleProps> = ({ race }: ScheduleProps) => {
  if (!race.FirstPractice || !race.FirstPractice.time) return <></>;
  return (
    <>
      <Text className="text-lg font-bold">Schedule</Text>
      <div className="flex items-center border p-4 mt-2 mb-4 shadow-sm">
        <div className="flex flex-col items-center">
          <Text className="font-bold">{new Date(race.FirstPractice.date).getDate()}</Text>
          <Badge
            count={new Date(race.FirstPractice?.date).toLocaleString('default', {
              month: 'short',
            })}
            style={{ backgroundColor: '#1890FF' }}
          />
        </div>
        <div className="ml-4">
          <Text className="text-md font-bold">Practice 1</Text>
          <br />
          <Text>
            {new Intl.DateTimeFormat('en-GB', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(Date.parse(`${race.FirstPractice?.date}T${race.FirstPractice?.time}`))}
          </Text>
        </div>
      </div>

      {race.Sprint && (
        <div className="flex items-center border p-4 mb-4 shadow-sm ">
          <div className="flex flex-col items-center">
            <Text className="font-bold">{new Date(race.Qualifying.date).getDate()}</Text>
            <Badge
              count={new Date(race.Qualifying.date).toLocaleString('default', {
                month: 'short',
              })}
              style={{ backgroundColor: '#1890FF' }}
            />
          </div>
          <div className="ml-4">
            <Text className="font-bold">Qualifying</Text>
            <br />
            <Text>
              {new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
              }).format(Date.parse(`${race.Qualifying.date}T${race.Qualifying.time}`))}
            </Text>
          </div>
        </div>
      )}

      <div className="flex items-center border p-4 mb-4 shadow-sm">
        <div className="flex flex-col items-center">
          <Text className="font-bold">{new Date(race.SecondPractice.date).getDate()}</Text>
          <Badge
            count={new Date(race.SecondPractice.date).toLocaleString('default', {
              month: 'short',
            })}
            style={{ backgroundColor: '#1890FF' }}
          />
        </div>
        <div className="ml-4">
          <Text className="font-bold">Practice 2</Text>
          <br />
          <Text>
            {new Intl.DateTimeFormat('en-GB', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(Date.parse(`${race.SecondPractice.date}T${race.SecondPractice.time}`))}
          </Text>
        </div>
      </div>

      {race.ThirdPractice && (
        <div className="flex items-center border p-4 mb-4 shadow-sm">
          <div className="flex flex-col items-center">
            <Text className="font-bold">{new Date(race.ThirdPractice.date).getDate()}</Text>
            <Badge
              count={new Date(race.ThirdPractice.date).toLocaleString('default', {
                month: 'short',
              })}
              style={{ backgroundColor: '#1890FF' }}
            />
          </div>
          <div className="ml-4">
            <Text className="font-bold">Practice 3</Text>
            <br />
            <Text>
              {new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
              }).format(Date.parse(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`))}
            </Text>
          </div>
        </div>
      )}

      {race.Sprint && (
        <div className="flex items-center border p-4 mb-4 shadow-sm ">
          <div className="flex flex-col items-center">
            <Text className="font-bold">{new Date(race.Sprint.date).getDate()}</Text>
            <Badge
              count={new Date(race.Sprint.date).toLocaleString('default', {
                month: 'short',
              })}
              style={{ backgroundColor: '#1890FF' }}
            />
          </div>
          <div className="ml-4">
            <Text className="font-bold">Sprint</Text>
            <br />
            <Text>
              {new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
              }).format(Date.parse(`${race.Sprint.date}T${race.Sprint.time}`))}
            </Text>
          </div>
        </div>
      )}

      {!race.Sprint && (
        <div className="flex items-center border p-4 mb-4 shadow-sm ">
          <div className="flex flex-col items-center">
            <Text className="font-bold">{new Date(race.Qualifying.date).getDate()}</Text>
            <Badge
              count={new Date(race.Qualifying.date).toLocaleString('default', {
                month: 'short',
              })}
              style={{ backgroundColor: '#1890FF' }}
            />
          </div>
          <div className="ml-4">
            <Text className="font-bold">Qualifying</Text>
            <br />
            <Text>
              {new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
              }).format(Date.parse(`${race.Qualifying.date}T${race.Qualifying.time}`))}
            </Text>
          </div>
        </div>
      )}

      <div className="flex items-center border p-4 mb-4 shadow-sm ">
        <div className="flex flex-col items-center">
          <Text className="font-bold">{new Date(race.date).getDate()}</Text>
          <Badge
            count={new Date(race.date).toLocaleString('default', {
              month: 'short',
            })}
            style={{ backgroundColor: '#1890FF' }}
          />
        </div>
        <div className="ml-4">
          <Text className="font-bold">Race</Text>
          <br />
          <Text>
            {new Intl.DateTimeFormat('en-GB', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(Date.parse(`${race.date}T${race.time}`))}
          </Text>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Schedule;
