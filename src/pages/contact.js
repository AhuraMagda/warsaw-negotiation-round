import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import PagesHeader from "../components/PagesHeader";

function Contact() {
  return (
    <Layout>
      <PagesHeader>CONTACT</PagesHeader>
      <main>
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
            <p>Experts department: experts@warsawnegotiations.com</p>
            <p>Logistic department logistyka@warsawnegotiations.com</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
