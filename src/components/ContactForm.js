import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/bb20869254405cd6094a0972a4746f36", values)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .max(300, "Must be 300 characters or less.")
        .required("Required"),
    }),
  });

  return (
    <form
      className="contact__form"
      onSubmit={formik.handleSubmit}
    >
      <div className="contact__form__table">
        <div className="contact__form__table__input-wrapper">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
          />
          {formik.touched.name && formik.errors.name && (
            <p className="contact__form__table__input-wrapper__error">
              {formik.errors.name}
            </p>
          )}
        </div>
        <div className="contact__form__table__input-wrapper">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <p className="contact__form__table__input-wrapper__error">
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="contact__form__table__input-wrapper">
          <label htmlFor="comment">Info</label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.comment}
          ></textarea>
          {formik.touched.comment && formik.errors.comment && (
            <p className="contact__form__table__input-wrapper__error">
              {formik.errors.comment}
            </p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
