import React from 'react';
import {Link} from 'react-router-dom';

import './main.scss';
import './media.scss';

const Main = () => {
  return (
    <div className="donations">
      <h1 className="donations__title">Пожертвования</h1>
      <span className="donations__description">У Вас пока нет сборов. Начните доброе дело.</span>
      <Link className="donations__link" to="typeDonations/">Создать сбор</Link>
    </div>
  )
}

export default Main;