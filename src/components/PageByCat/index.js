// == Import npm
import React from 'react';
import { useParams } from 'react-router-dom';

// == Import
import './pageByCat.scss';

// == Composant
const PageByCat = ({ handleResetSearch }) => {
  const { slug } = useParams();
  return (
    <div className="pageByCat">
      <header className="pageByCat__header">
        <img
          src="ss"
          alt={`catégorie ${slug}`}
          className="pageByCat__header__img"
        />
        <div>
          <h2>{slug}</h2>
          <div>
            <span>513k spectateurs</span>
            <span>12.8 M followers</span>
          </div>
          <button type="button" className="pageByCat__button">
            <i className="far fa-heart" />Suivre
          </button>
        </div>
      </header>
      <ul>
        <li>Chaines live</li>
        <li>Vidéos</li>
        <li>Clips</li>
      </ul>
      <p>{slug}</p>
    </div>
  );
};
// == Export
export default PageByCat;
