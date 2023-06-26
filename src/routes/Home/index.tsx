import { useRef, useState } from 'react';
import { Select, Typography } from 'antd';

import { Drivers, Races, Constructors } from 'components';
import Tab from './components/Tab';
import { FIRST_SEASON, CURRENT_SEASON } from 'utils/constants';

import F1CarEvolution from 'assets/gifs/f1-car-evolution.gif';
// import { Canvas } from 'react-three-fiber';
// import { useFrame } from 'react-three-fiber';
// import * as THREE from 'three';

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
  // const Car: React.FC = () => {
  //   const carRef = useRef<THREE.Mesh>();

  //   useFrame(() => {
  //     if (carRef.current) {
  //       carRef.current.rotation.y += 0.01;
  //     }
  //   });

  //   const carColor = new THREE.Color(0xff0000);
  //   const tireColor = new THREE.Color(0x000000);
  //   const windshieldColor = new THREE.Color(0x808080);
  //   const spoilerColor = new THREE.Color(0x0000ff);
  //   const wheelRadius = 0.15;
  //   const wheelWidth = 0.1;
  //   const bodyWidth = 2;
  //   const bodyHeight = 0.4;
  //   const bodyLength = 5;
  //   const windshieldWidth = 1.6;
  //   const windshieldHeight = 0.1;
  //   const windshieldDepth = 0.2;
  //   const spoilerWidth = 2;
  //   const spoilerHeight = 0.3;
  //   const spoilerDepth = 0.5;

  //   return (
  //     <group ref={carRef}>
  //       {/* Car body */}
  //       <mesh position={[0, bodyHeight / 2, 0]}>
  //         <boxGeometry args={[bodyWidth, bodyHeight, bodyLength]} />
  //         <meshStandardMaterial color={carColor} />
  //       </mesh>

  //       {/* Front left tire */}
  //       <mesh position={[-bodyWidth / 2, -wheelRadius, bodyLength / 2 - wheelWidth / 2]}>
  //         <cylinderGeometry args={[wheelRadius, wheelRadius, wheelWidth, 30]} />
  //         <meshStandardMaterial color={tireColor} />
  //       </mesh>

  //       {/* Front right tire */}
  //       <mesh position={[bodyWidth / 2, -wheelRadius, bodyLength / 2 - wheelWidth / 2]}>
  //         <cylinderGeometry args={[wheelRadius, wheelRadius, wheelWidth, 30]} />
  //         <meshStandardMaterial color={tireColor} />
  //       </mesh>

  //       {/* Rear left tire */}
  //       <mesh position={[-bodyWidth / 2, -wheelRadius, -bodyLength / 2 + wheelWidth / 2]}>
  //         <cylinderGeometry args={[wheelRadius, wheelRadius, wheelWidth, 30]} />
  //         <meshStandardMaterial color={tireColor} />
  //       </mesh>

  //       {/* Rear right tire */}
  //       <mesh position={[bodyWidth / 2, -wheelRadius, -bodyLength / 2 + wheelWidth / 2]}>
  //         <cylinderGeometry args={[wheelRadius, wheelRadius, wheelWidth, 30]} />
  //         <meshStandardMaterial color={tireColor} />
  //       </mesh>

  //       {/* Windshield */}
  //       <mesh position={[0, bodyHeight + windshieldHeight / 2, bodyLength / 2 - windshieldDepth / 2]}>
  //         <boxGeometry args={[windshieldWidth, windshieldHeight, windshieldDepth]} />
  //         <meshStandardMaterial color={windshieldColor} transparent opacity={0.5} />
  //       </mesh>

  //       {/* Spoiler */}
  //       <mesh position={[0, spoilerHeight / 2, -bodyLength / 2 + spoilerDepth / 2]}>
  //         <boxGeometry args={[spoilerWidth, spoilerHeight, spoilerDepth]} />
  //         <meshStandardMaterial color={spoilerColor} />
  //       </mesh>
  //     </group>
  //   );
  // };
  return (
    // <Canvas>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <Car />
    // </Canvas>
    <div className="py-16">
      <div className="flex flex-col items-center w-full">
        <Title style={{ margin: 0 }}>F1 Racing Results</Title>
        <img className="mb-2" style={{ width: '5rem' }} src={F1CarEvolution} alt="F1 Car Evolution" />
        <div>
          <Text>Select season:</Text>
          <Select defaultValue={season} options={SEASON_LIST} onChange={handleChangeSeason} className="ml-2" />
        </div>
      </div>
      <div className="border rounded mt-8 sm:mx-16">
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
