import * as React from 'react';
import Main from './Main';
import Logos from './logos';
import bg from '../../../assets/images/partners-back.svg';
import './index.scss';

function Categories() {
  return (
    <section className="categories">
      <div className="moons"></div>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Main />
      </div>
      <Logos />
    </section>
  );
}

export default Categories;
