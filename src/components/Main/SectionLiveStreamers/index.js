// == Import npm
import React from 'react';
import ChannelStream from 'src/components/Main/SectionLiveStreamers/ChannelStream';
// == Import
import './sectionLiveStreamers.scss';

// == Composant
const SectionLiveStreamers = ({ liveStreamsList }) => (
  <section className="sectionLiveStreamers">
    <h2 className="sectionLiveStreamers__title">chaines live qui pourraient vous plaire</h2>
    <ul className="sectionLiveStreamers__list">
      {liveStreamsList && liveStreamsList.map((liveStream) => (
        <ChannelStream
          key={liveStream.id}
          id={liveStream.id}
          userName={liveStream.user_name}
          gameName={liveStream.game_name}
          title={liveStream.title}
          viewer={liveStream.viewer_count}
          language={liveStream.language}
          image={liveStream.thumbnail_url}

        />
      ))}
    </ul>

  </section>
);

// == Export
export default SectionLiveStreamers;
