import React from "react";
import Harry from "./Harry";
import LittleInfo from "./Pages/littleInfo";
import Management from "./Pages/Management";
import OurPage from "./Pages/OurPage";
import WhatWeDo from "./Pages/WhatWeDo";
import TypeWrite from "./TypeWrite";

const HomePage = () => {
  return (
    <div>
      <TypeWrite />
      <Harry />
      <Management />
      <WhatWeDo />
      <OurPage />
      <br />
      <br />
      <br />
      <LittleInfo />
    </div>
  );
};

export default HomePage;
