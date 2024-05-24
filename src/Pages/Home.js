import * as React from 'react';

import Header from '../Components/Home/Header';
import Categories from '../Components/Home/Categories';
import Team from '../Components/Home/Team';
import About from '../Components/Home/About';
import { Games } from '../Components/Home/Games';
import { Newsletter } from '../Components/Common/Newsletter';
import Footer from '../Components/Common/Footer';

function Home() {
  return (
    <div className="page home" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Categories />
      <Team />
      <About />
      <Games />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
