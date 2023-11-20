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
        <div className="contact__wrapper__form__table__input-wrapper">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            required
          />
          {formik.touched.fullName && formik.errors.fullName && <p className="contact__wrapper__form__table__input-wrapper__error">{formik.errors.fullName}</p>}
        </div>
        <div className="contact__wrapper__form__table__input-wrapper">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email && <p className="contact__wrapper__form__table__input-wrapper__error">{formik.errors.email}</p>}
        </div>
        <div className="contact__wrapper__form__table__input-wrapper">
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
          {formik.touched.comment && formik.errors.comment && <p className="contact__wrapper__form__table__input-wrapper__error">{formik.errors.comment}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
