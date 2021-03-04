// == Import npm
import React from 'react';
// == Import
import './categoryStream.scss';

// == Composant
const CategoryStream = ({
  id, name, boxArtUrl,
}) => (
  <li className="categoryStream" id={id}>
    <header className="categoryStream__header">
      <div className="backgroundImg" />

      <img
        src={boxArtUrl}
        alt="stream in progress"
        className="categoryStream__img"
      />
    </header>
    <div className="cornerTop" />
    <div className="cornerRight" />
    <section className="categoryStream__containerUser">
      <div className="categoryStream__containerUser__content">
        <h2 className="categoryStream__containerUser__content__title">{name}</h2>
        <h3 className="categoryStream__containerUser__content__userName">o</h3>
        <h3 className="categoryStream__containerUser__content__gamePlayed">o</h3>
      </div>
    </section>
  </li>
);
// == Export
export default CategoryStream;
