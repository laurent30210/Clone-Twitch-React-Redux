// == Import npm
import React from 'react';
import CategoryStream from 'src/components/Main/SectionCatStreamers/CategoryStream';
import {
  changeTypeNumberOfViewers,
} from 'src/utils';
// == Import
import './sectionCatStreamers.scss';

// == Composant
const SectionCatStreamers = ({ catStreamsList, viewers, nbCat }) => {
  const getNumber = (name) => {
    let numb = null;
    viewers.forEach((viewer) => {
      Object.keys(viewer).forEach((key) => {
        if (name === key) {
          numb = changeTypeNumberOfViewers(viewer[key]);
        }
      });
    });
    return numb;
  };

  return (
    <section className="section sectionCatStreamers">
      <h2 className="sectionCatStreamers__title"><span className="sectionCatStreamers__title__firstWord">catégories</span> qui pourraient vous plaire</h2>
      <ul className="sectionCatStreamers__list">
        {catStreamsList != null && catStreamsList.map((catStream, index) => (index <= nbCat && (
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
