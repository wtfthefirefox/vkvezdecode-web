import React from 'react';
import { Link } from 'react-router-dom';

import './typeDonations.scss';
import './media.scss';

const TypeDonations = () => {
  return (
    <div className="typeDonations">
      <h1 className="typeDonations__title">Тип сбора</h1>
      <Link className="typeDonations__link-back" to="/" />
      <ul className="typeDonations__list">
        <Link to="target/create/">
          <li className="typeDonations__item">
            <div className="typeDonations__item-content typeDonations__target">
              <h2 className="typeDonations__item-title">Целевой сбор</h2>
              <p className="typeDonations__item-description">Когда есть определённая цель</p>
            </div>
          </li>
        </Link>
        <Link to="date/create/">
          <li className="typeDonations__item">
            <div className="typeDonations__item-content typeDonations__date">
              <h2 className="typeDonations__item-title">Регулярный сбор</h2>
              <p className="typeDonations__item-description">Если помощь нужна ежемесячно</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default TypeDonations;