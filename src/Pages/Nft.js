import * as React from 'react';

import Header from '../Components/Nft/Header';
import { NftList } from '../Components/Nft/NftList';
import Bonus from '../Components/Nft/Bonus';
// import Categories from "../Components/About/Categories";
// import {Newsletter} from "../Components/Home/Newsletter";
import Footer from '../Components/Common/Footer';
import Video from '../Components/Nft/Video';

function Nft() {
  return (
    <div className="page nft">
      <Header />
      <NftList />
      <Bonus />
      <Video />
      {/*<Categories />*/}
      {/*<Newsletter />*/}
      <Footer />
    </div>
  );
}

export default Nft;
