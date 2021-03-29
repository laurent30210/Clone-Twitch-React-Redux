// == Import npm
import React from 'react';
import SectionTopStreamers from 'src/containers/SectionTopStreamers';
import SectionLiveStreamers from 'src/containers/SectionLiveStreamers';
import SectionCatStreamers from 'src/containers/SectionCatStreamers';
import SectionChannelStreams from 'src/containers/SectionChannelStreams';
// == Import
import './main.scss';
// == Composant
const Main = ({ menuActived }) => (
  <div
    className="main"
    style={{ padding: menuActived && '50px 0 0 50px' }}
  >
    <SectionTopStreamers />
    <SectionLiveStreamers />
    <SectionCatStreamers />
    <SectionChannelStreams />
  </div>
);

// == Export
export default Main;
