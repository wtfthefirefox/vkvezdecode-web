import React from 'react';
import {Link} from 'react-router-dom';

import './additionalInfo.scss';
import './media.scss';

const AdditionalInfo = () => {
  return (
    <div className="additionalInfo">
      <h1 className="additionalInfo__title">Дополнительно</h1>
      <Link to="/typeDonations/target/create/" className="additionalInfo__link-back"/>
      <ul className="additionalInfo__list">
        <li className="additionalInfo__item">
          <label className="additionalInfo__item-title" htmlFor="additionalInfo__autor">Автор</label>
          <input value="Матвей Правосудов" id="additionalInfo__autor" className="additionalInfo__item-input additionalInfo__item-input__autor" readOnly/>
        </li>
        <li className="additionalInfo__item">
          <label className="additionalInfo__item-title additionalInfo__item-title-end">Сбор завершится</label>
          <ul className="additionalInfo__list__radio">
            <li className="radio-item">
              <input type="radio" id="additionalInfo__radio-count"/>
              <label htmlFor="additionalInfo__radio-count">Когда соберём сумму</label>
              <input type="radio" id="additionalInfo__radio-date"/>
              <label htmlFor="additionalInfo__radio-date">В определённую дату</label>
            </li>
          </ul>
        </li>
        <li className="additionalInfo__item">
          <label className="additionalInfo__item-title">Дата окончания</label>
          <input placeholder="Выберите дату" className="additionalInfo__item-input"/>
        </li>
      </ul>
      <Link to="#" className="additionalInfo__link-create">Создать сбор</Link>
    </div>
  )
}

export default AdditionalInfo;