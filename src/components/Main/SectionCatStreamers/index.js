// == Import npm
import React from 'react';
import CategoryStream from 'src/components/Main/SectionCatStreamers/CategoryStream';
import {
  changeTypeNumberOfViewers,
} from 'src/utils';
// == Import
import './sectionCatStreamers.scss';

// == Composant
const SectionCatStreamers = ({ catStreamsList, viewers }) => {
  const getNumber = (name) => {
    viewers.map((viewer) => {
      Object.keys(viewer).forEach((key) => (name === key
        ? changeTypeNumberOfViewers(viewer[key]) : 0));
    });
  };

  return (
    <section className="section sectionCatStreamers">
      <h2 className="sectionCatStreamers__title"><span className="sectionCatStreamers__title__firstWord">catégories</span> qui pourraient vous plaire</h2>
      <ul className="sectionCatStreamers__list">
        {catStreamsList != null && catStreamsList.map((catStream, index) => (index <= 7 && (
        <CategoryStream
          key={catStream.id}
          id={catStream.id}
          name={catStream.name}
          boxArtUrl={catStream.box_art_url}
          viewers={getNumber(catStream.name)}
        />
        )))}
      </ul>
    </section>
  );
};
// == Export
export default SectionCatStreamers;
