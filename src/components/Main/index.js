// == Import npm
import React from 'react';
import SectionTopStreamers from 'src/components/Main/SectionTopStreamers';
import SectionLiveStreamers from 'src/containers/SectionLiveStreamers';
import SectionCatStreamers from 'src/containers/SectionCatStreamers';
// import SectionChannelStreams from 'src/containers/SectionChannelStreams';

// == Import
import './main.scss';

// == Composant
const Main = () => (
  <div className="main">
    <SectionTopStreamers />
    <SectionLiveStreamers />
    <SectionCatStreamers />
    {/* <SectionChannelStreams /> */}
  </div>
);

// == Export
export default Main;
