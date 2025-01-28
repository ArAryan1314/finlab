import React from "react";
import HeaderWrapper from "../(global)/header/header";
import FooterWrapper from "../(global)/footer/footer";
import Image from "next/image";
import styles from "./home.module.scss";
import HeroWrapper from "./section-one/hero-wrapper";
import RecentClients from "./section-two/partners";
import ChooseUs from "./section-three/chose";
import PaymentContainer from "./section-four/payment";
import MoreContainer from "./section-five/more";
import PricingRow from "./section-six/pricing";
import CustomerModule from "./section-seven/customer";
import FaqContainer from "./section-eight/faq";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <HeaderWrapper />
      {/* Hero Section */}
      <HeroWrapper />
      {/* Recent Client */}
      <RecentClients />
      {/* ChooseUs */}
      <ChooseUs />
      {/* Payment container */}
      <PaymentContainer />
      {/* More Container */}
      <MoreContainer />
      {/* Pricing Conttainer */}
      <PricingRow />
      {/* customer Ref */}
      <CustomerModule />
      {/* Faq */}
      <FaqContainer />

      {/* Footer */}
      <FooterWrapper />
    </div>
  );
};

export default HomePage;
