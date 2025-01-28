import React from "react";
import styles from "./pricing.module.scss";
import PricingRowOne from "../Components/pricing-components/row-one/page";
import HeaderWrapper from "../Components/(global)/header/header";
import FooterWrapper from "../Components/(global)/footer/footer";

const PricingPage = () => {
  return (
    <div>
      <HeaderWrapper />
      {/* Header */}

      <PricingRowOne />

      {/* Footer */}
      <FooterWrapper />
    </div>
  );
};

export default PricingPage;
