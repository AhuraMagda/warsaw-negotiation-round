import React from "react";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleClose = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setIsFailure(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post(
          "https://formsubmit.co/ajax/bb20869254405cd6094a0972a4746f36",
          values
        )
        .then((response) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          setIsSubmitting(false);
          setIsFailure(true);
          resetForm();
        });
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
    <div className="contact__form-wrapper">
      {isSubmitting && (
        <div className="contact__form-wrapper__sending">
          <h2>SENDING...</h2>
          <p>please wait</p>
        </div>
      )}

      {(isSuccess || isFailure) && (
        <>
          <div className="contact__form-wrapper__sending">
            {isSuccess && <h2 style={{ color: "green" }}>FORM SUBMITTED</h2>}
            {isFailure && <h2 style={{ color: "red" }}>ERROR</h2>}
            <button
              onClick={handleClose}
              className="contact__form-wrapper__sending__close"
            >
              close ✖
            </button>
          </div>
        </>
      )}

      <form
        className="contact__form-wrapper__form"
        onSubmit={formik.handleSubmit}
      >
        <div className="contact__form-wrapper__form__table">
          <div className="contact__form-wrapper__form__table__input-wrapper">
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
              <p className="contact__form-wrapper__form__table__input-wrapper__error">
                {formik.errors.name}
              </p>
            )}
          </div>
          <div className="contact__form-wrapper__form__table__input-wrapper">
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
              <p className="contact__form-wrapper__form__table__input-wrapper__error">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="contact__form-wrapper__form__table__input-wrapper">
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
              <p className="contact__form-wrapper__form__table__input-wrapper__error">
                {formik.errors.comment}
              </p>
            )}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
