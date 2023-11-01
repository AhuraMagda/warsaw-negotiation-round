import React from "react"
import Layout from "./components/Layout";
import ContactForm from "./components/ContactForm";


function Contact(props) {
  return (
    <Layout page="contact">
        <header>
            <h1>CONTACT</h1>
        </header>
        <main>
            <section className="contact__wrapper">
                <p><b>Do you have any question about the Warsaw Negotiation Round?</b></p>
                <p>Feel free to contact us! We will be happy to answer any questions you may have. 
                    Simply fill in the form, or select the department you would like to contact and write an e-mail.</p>
                <ContactForm />
                <div className="contact__info">
                    <p>OUR DEPARTMENTS:</p>
                    <p>Cooperation Department: warsawnegotiations@gmail.com</p>
                    <p>Experts Department: wnr.experts@gmail.com</p>
                    <p>Participants Department: </p>
                </div>
            </section>
        </main>
    </Layout>
  )
};

export default Contact;