import React from "react";
import { Formik, useFormik } from 'formik';

// TODO backend

export default function ContactForm() {

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      comment: ""
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })


  return (
    <form
      action="/functions/send-email.php"
      method="POST"
      className="contact__wrapper__form"
      onSubmit={formik.handleSubmit}
    >
      <div className="contact__wrapper__form__table">
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Info</label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            value={formik.values.comment}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}