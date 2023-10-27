import React from "react";




function ContactForm() {
    return (
     <form 
        action="send-email.php"
        method="POST"
        className="contact__wrapper__form">
        <div className="contact__wrapper__form__table">
            <div>
                <label for="name">Full name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="contact__form__table__name"
                    required
                />
            </div>
            <div>
                <label for="email">E-mail</label>
                <input 
                    type="text" 
                    id="email" 
                    name="contact__form__table__email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                />
            </div>
            <div>
                <label for="comment">Info</label>
                <textarea name="contact__form__table__comment" id="comment" cols="30" rows="10"></textarea>
            </div>
                <div>
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
    )
}

export default ContactForm;