import React from "react";
import {Link} from 'react-router-dom';

import "./targetingForm.scss";
import "./media.scss";

const TargetingForm = () => {
  return (
    <div className="targetingForm">
      <h1 className="targetingForm__title">Целевой сбор</h1>
      <Link className="targetingForm__link-back" to="/typeDonations/"/>
      <div className="targetingForm__img-form" >Загрузить обложку</div>
      <ul className="targetingForm__list">
        <li className="targetingForm__item">
          <label htmlFor="targetingForm__title" className="targetingForm__item-title">Название сбора</label>
          <input placeHolder="Название сбора" id="targetingForm__title" className="targetingForm__item-input" />
        </li>
        <li className="targetingForm__item">
          <label htmlFor="targetingForm__count" className="targetingForm__item-title">Сумма, ₽</label>
          <input placeHolder="Сколько нужно собрать?" id="targetingForm__count" className="targetingForm__item-input" />
        </li>
        <li className="targetingForm__item">
          <label htmlFor="targetingForm__target" className="targetingForm__item-title">Цель</label>
          <input placeHolder="Например, лечение человека" className="targetingForm__item-input" id="targetingForm__target" />
        </li>
        <li className="targetingForm__item">
          <label htmlFor="targetingForm__description" className="targetingForm__item-title">Описание</label>
          <input placeHolder="На что пойдут деньги и как они кому-то помогут?" id="targetingForm__description" className="targetingForm__item-input" />
        </li>
        <li className="targetingForm__item">
          <label htmlFor="targetingForm__direction" className="targetingForm__item-title targetingForm__item-input__title">Куда получать деньги</label>
          <input value="Счёт VK Pay · 1234" id="targetingForm__direction" className="targetingForm__item-input targetingForm__item-input__list" readOnly/>
        </li>
      </ul>
      <Link className="targetingForm__link-next" to="additionalInfo/">Далее</Link>
    </div>
  )
}

export default TargetingForm;