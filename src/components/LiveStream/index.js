// == Import npm
import React, { useEffect } from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import { useParams } from 'react-router-dom';
// == Import
import './liveStream.scss';

// == Composant
const LiveStream = ({ handleResetSearch }) => {
  useEffect(() => {
    handleResetSearch();
  }, []);
  // now, we will use the parameter (slug) and give it to ReactTwitchEmbedVideo
  const { slug } = useParams();
  return (
    <div className="liveStream">
      <ReactTwitchEmbedVideo height="700" width="100%" channel={slug} />
    </div>
  );
};

// == Export
export default LiveStream;
