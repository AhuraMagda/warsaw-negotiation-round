import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

// TODO backend

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().max(300, "Must be 300 characters or less.").required("Required")
    }),
  });

  console.log(formik.errors);
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
          {formik.errors.fullName && <p>{formik.errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
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
          {formik.errors.comment && <p>{formik.errors.comment}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
