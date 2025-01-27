import React from "react";
import react from "./about.module.scss";
import FooterWrapper from "../(global)/footer/footer";
import HeaderWrapper from "../(global)/header/header";

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <HeaderWrapper />

      {/* Footer */}
      <FooterWrapper />
    </div>
  );
};

export default AboutPage;
