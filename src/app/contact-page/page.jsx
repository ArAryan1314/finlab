import React from "react";
import styles from "./contact.module.scss";
import HeaderWrapper from "../Components/(global)/header/header";
import FooterWrapper from "../Components/(global)/footer/footer";
import ContactRowOne from "../Components/contact-components/row-one/page";
import FormLayout from "../Components/contact-components/row-two/page";

const ContactPage = () => {
  return (
    <div>
      {/* Header */}
      <HeaderWrapper />

      {/* Contact Row One  */}
      <ContactRowOne />

      {/* Footer */}
      <FooterWrapper />
    </div>
  );
};

export default ContactPage;
