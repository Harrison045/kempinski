
import React from "react";
import Harry from "./Harry";
import Footer from "./Pages/Footer";
// import LatestPost from "./Pages/LatestPost";
import LittleInfo from "./Pages/littleInfo";
import Management from "./Pages/Management";
import OurClients from "./Pages/OurClients";
import OurPage from "./Pages/OurPage";
import Testimony from "./Pages/Testimony";
import WhatWeDo from "./Pages/WhatWeDo";
import TypeWrite from "./TypeWrite";

const HomePage = () => {
  return (
    <div>
      <TypeWrite />
      <Harry />
      <Management />
      <WhatWeDo />
      <br/>
      <br/>
      <br/>
      <br/>
      <OurPage />
      <br />
      <br />
      <br />
      <LittleInfo />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <OurClients/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Testimony/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <LatestPost/> */}
      <Footer/>
    </div>
  );
};

export default HomePage;
