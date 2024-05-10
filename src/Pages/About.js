import * as React from 'react';

import Header from '../Components/About/Header';
import Categories from '../Components/About/Categories';
import { Newsletter } from '../Components/Common/Newsletter';
import Footer from '../Components/Common/Footer';

function About() {
  return (
    <div className="page about">
      <Header />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;
