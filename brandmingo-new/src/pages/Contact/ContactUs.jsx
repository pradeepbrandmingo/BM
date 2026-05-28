import React from "react";
import ContactHero from "../../components/ContactpagesHero/ContactHero";
import ClientForm from "../../components/contactfrom/ClientForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactFaq from "../../components/ContactFaq/ContactFaq";

const ContactUs = () => {
  return (
    <>
      <ContactHero />

      <div className="client-form-wrap">
        <ClientForm />
      </div>

      <div className="contact-info-section">
        <ContactInfo />
      </div>

      <div className="contact-info-section">
        <ContactFaq />
      </div>
    </>
  );
};

export default ContactUs;
