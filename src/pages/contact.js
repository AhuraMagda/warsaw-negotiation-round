import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import PagesHeader from "../components/PagesHeader";
import "../scss/contact-scss/contact.css"

function Contact() {
  return (
    <Layout>
      <PagesHeader>CONTACT</PagesHeader>
      <main className="contact">
        <section className="contact__wrapper">
          <h2>Do you have any question about the Warsaw Negotiation Round?</h2>
          <p>
            If you have any question, or want to find out more about
            cooperation, participation or experts - feel free to contact us.
          </p>
          <p>
            We would appreciate it if you choose the appropriate department and
            write an email to us.
          </p>
          {/* <ContactForm /> */}

          <div className="contact__info">
            <p>
              <b>OUR DEPARTMENTS:</b>
            </p>
            <p>Contact: <a href="mailto:contact@warsawnegotiations.com">contact@warsawnegotiations.com</a></p>
            <p>Collaboration department: <a href="mailto:wspolpraca@warsawnegotiations.com">wspolpraca@warsawnegotiations.com</a></p>
            <p>Experts department: <a href="mailto:experts@warsawnegotiations.com">experts@warsawnegotiations.com</a></p>
            <p>Participants department: <a href="mailto:participants@warsawnegotiations.com">participants@warsawnegotiations.com</a></p>
            <p>Logistic department: <a href="mailto:logistyka@warsawnegotiations.com">logistyka@warsawnegotiations.com</a></p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
