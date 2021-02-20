// == Import npm
import React from 'react';
import SectionTopStreamers from 'src/components/Main/SectionTopStreamers';
import SectionLiveStreamers from 'src/components/Main/SectionLiveStreamers';

// == Import
import './main.scss';

// == Composant
const Main = () => (
  <div className="main">
    <SectionTopStreamers />
    <SectionLiveStreamers />
  </div>
);

// == Export
export default Main;
