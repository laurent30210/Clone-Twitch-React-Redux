// == Import npm
import React from 'react';
import ChannelStream from 'src/components/Main/SectionLiveStreamers/ChannelStream';

// == Import
import './sectionChannelStreams.scss';
import { findNameForThisChannel } from 'src/utils';

// == Composant
const SectionChannelStreams = ({ streams }) => (
  <section className="section sectionChannelContainer">

    {streams.length > 17 && streams.map((channel) => (
      <div
        className={`section sectionChannelStreams sectionChannelStreams--${Object.keys(channel)}`}
      >
        <h2 className="sectionChannelStreams__title">Chaîne de <span className="sectionChannelStreams__title__firstWord">{findNameForThisChannel(Object.keys(channel))}</span> recommandées</h2>
        <ul className="sectionChannelStreams__list">
          {Object.keys(channel).map((name) => (
            channel[name].map((item) => (
              <ChannelStream
                key={item.id}
                id={item.id}
                userName={item.channel.name}
                loginName={item.channel.display_name}
                gameName={item.game}
                userPic={item.channel.logo}
                title={item.channel.status}
                viewer={item.viewers}
                language={item.channel.language}
                image={item.preview.medium}
                type={item.broadcast_platform}
              />
            ))))}
        </ul>
      </div>
    ))}

  </section>
);

// == Export
export default SectionChannelStreams;
