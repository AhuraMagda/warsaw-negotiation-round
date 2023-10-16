import React from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function Contact(props) {
  return (
    <>
        <NavBar />
        <header>
            <h1>CONTACT</h1>
        </header>
        <main>
            <section class="contact">

                <p>Do you have any question about the Warsaw Negotiation Round? </p>
                <p>Feel free to contact us! We will be happy to answer any questions you may have. 
                    Simply fill in the form, or select the department you would like to contact and write an e-mail.</p>
                <form class="contact__form">
                    <div class="contact__form__table">
                        <div>
                        <label for="contact-name">Full name</label>
                        <input type="text" id="contact-name" name="contact-name"/>
                        </div>
                        <div>
                        <label for="contact-email">E-mail</label>
                        <input type="text" id="contact-email" name="contact-email"/>
                        </div>

                        <div>
                        <label for="contact-text">Info</label>
                        <textarea name="contact-text" id="contact-text" cols="30" rows="10"></textarea>
                        </div>

                        <div>
                        <button type="submit">Submit</button>
                        </div>

                    </div>
                </form>
                <div class="contact__info">
                    <p>OUR DEPARTMENTS:</p>
                    <p>Cooperation Department: warsawnegotiations@gmail.com</p>
                    <p>Experts Department: wnr.experts@gmail.com</p>
                    <p>Participants Department: </p>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
};

export default Contact;