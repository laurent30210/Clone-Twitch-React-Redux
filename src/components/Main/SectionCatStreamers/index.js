// == Import npm
import React from 'react';
import CategoryStream from 'src/components/Main/SectionCatStreamers/CategoryStream';
// == Import
import './sectionCatStreamers.scss';

// == Composant
const SectionCatStreamers = ({ catStreamsList }) => (
  <section className="sectionLiveStreamers">
    <h2 className="sectionLiveStreamers__title">catégories qui pourraient vous plaire</h2>
    <ul className="sectionLiveStreamers__list">
      {catStreamsList && catStreamsList.map((catStream) => (
        <CategoryStream
          key={catStream.id}
          id={catStream.id}
          name={catStream.name}
          boxArtUrl={catStream.box_art_url}
        />
      ))}
    </ul>

  </section>
);

// == Export
export default SectionCatStreamers;
