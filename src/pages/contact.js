import React from "react";
import Layout from "./components/Layout";
import ContactForm from "./components/ContactForm";
import ComponentHeader from "./components/ComponentHeader";

function Contact(props) {
  return (
    <Layout>
      <ComponentHeader>CONTACT</ComponentHeader>
      <main>
        <section className="contact__wrapper">
          <h2>Do you have any question about the Warsaw Negotiation Round?</h2>
          <p>
            Feel free to contact us! We will be happy to answer any questions
            you may have. Simply fill in the form, or select the department you
            would like to contact and write an e-mail.
          </p>
          <ContactForm />
          <div className="contact__info">
            <p>
              <b>OUR DEPARTMENTS:</b>
            </p>
            <p>Cooperation Department: warsawnegotiations@gmail.com</p>
            <p>Experts Department: wnr.experts@gmail.com</p>
            <p>Participants Department: </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
