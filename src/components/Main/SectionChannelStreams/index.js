// == Import npm
import React from 'react';
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
        {console.log('channel ', channel) }
        <h2 className="sectionChannelStreams__title">Chaîne de <span className="sectionChannelStreams__title__firstWord">{findNameForThisChannel(Object.keys(channel))}</span> recommandées</h2>
        <ul className="sectionChannelStreams__list">
          {Object.keys(channel).map((stream, u) => (console.log(stream, u)))}
        </ul>
      </div>
    ))}

  </section>
);

// == Export
export default SectionChannelStreams;
