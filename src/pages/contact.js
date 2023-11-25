import React from "react";
import Layout from "../components/Layout";
import PagesHeader from "../components/PagesHeader";
import "../scss/contact-scss/contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Layout>
      <PagesHeader>CONTACT</PagesHeader>
      <main className="contact">
        <section className="contact__wrapper">
          <h2>Do you have any inquiries about the Warsaw Negotiation Round?</h2>
          <p>
            Feel free to reach out to us! We're here to assist with any
            questions you may have. You can either fill out the form or select a
            specific department to contact and send us an email.
          </p>
          <p>We look forward to hearing from you!</p>

          <div className="contact__wrapper__info">
            <h2>Our departments:</h2>
            <p>
              Contact:{" "}
              <a href="mailto:contact@warsawnegotiations.com">
                contact@warsawnegotiations.com
              </a>
            </p>
            <p>
              Collaboration department:{" "}
              <a href="mailto:wspolpraca@warsawnegotiations.com">
                wspolpraca@warsawnegotiations.com
              </a>
            </p>
            <p>
              Experts department:{" "}
              <a href="mailto:experts@warsawnegotiations.com">
                experts@warsawnegotiations.com
              </a>
            </p>
            <p>
              Participants department:{" "}
              <a href="mailto:participants@warsawnegotiations.com">
                participants@warsawnegotiations.com
              </a>
            </p>
            <p>
              Logistic department:{" "}
              <a href="mailto:logistyka@warsawnegotiations.com">
                logistyka@warsawnegotiations.com
              </a>
            </p>
          </div>
        </section>
        <ContactForm />
      </main>
    </Layout>
  );
}

export default Contact;
