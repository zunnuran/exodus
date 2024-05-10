import * as React from 'react';

import Header from '../Components/Games/Header';
import Logos from '../Components/Games/logos';
import Main from '../Components/Games/Main';
import { Newsletter } from '../Components/Common/Newsletter';
import Footer from '../Components/Common/Footer';

function Home() {
  return (
    <div className="page games" style={{ paddingBottom: '130px', backgroundColor: '#1E1E1E' }}>
      <Header />
      <Logos />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
