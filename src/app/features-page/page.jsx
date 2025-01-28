import React from "react";
import styles from "./feature.module.scss";
import FeatureRowOne from "../Components/feature-components/row-one/page";
import HeaderWrapper from "../Components/(global)/header/header";
import FooterWrapper from "../Components/(global)/footer/footer";
import FeatureRowTwo from "../Components/feature-components/row-two/page";

const FeaturePage = () => {
  return (
    <div>
      {/* Header */}
      <HeaderWrapper />

      {/* Feature Row ONe */}
      <FeatureRowOne />
      {/* Feature Row Two */}
      <FeatureRowTwo />

      {/* Footer */}
      <FooterWrapper />
    </div>
  );
};

export default FeaturePage;
