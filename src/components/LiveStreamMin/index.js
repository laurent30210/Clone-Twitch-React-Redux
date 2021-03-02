// == Import npm
import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
// == Import
import './liveStreamMin.scss';

// == Composant
const LiveStreamMin = ({ channelName }) => (
  <div className="liveStreamMin">
    <ReactTwitchEmbedVideo height="100" width="100%" channel={channelName} />
  </div>
);

// == Export
export default LiveStreamMin;
