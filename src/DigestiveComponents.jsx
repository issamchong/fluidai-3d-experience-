import React from 'react';
import Liver from './components/Liver';
import SmallIntestines from './components/SmallIntestines';
import LargeIntestines from './components/LargeIntestines';

const DigestiveComponents = ({  }) => {
  return (
    <group>
      <Liver  scale={0.4}/>
      <SmallIntestines scale={0.4} />s
      <LargeIntestines scale={0.4} />
    </group>
  );
};

export default DigestiveComponents;
