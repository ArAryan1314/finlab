import React from "react";
import styles from "./aboutpage.module.scss";
import FooterWrapper from "../Components/(global)/footer/footer";
import HeaderWrapper from "../Components/(global)/header/header";
import RowOne from "../Components/about-components/row-one/page";
import AboutRowOne from "../Components/about-components/row-one/page";
import AboutChooseUs from "../Components/about-components/row-three/page";
import AboutRowThree from "../Components/about-components/row-two/page";
import AboutRowFour from "../Components/about-components/row-four/page";

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <HeaderWrapper />

      {/* About Row ONe */}
      <AboutRowOne />

      {/* Row Two */}
      <AboutChooseUs />

      {/* Row Three */}
      <AboutRowThree />

      {/* Row Four */}
      <AboutRowFour />

      {/* Footer */}
      <FooterWrapper />
    </div>
  );
};

export default AboutPage;
