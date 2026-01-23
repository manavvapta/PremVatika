import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

const ContactSchema = Yup.object({
  name: Yup.string().min(3, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
    .required("Phone is required"),
  message: Yup.string().min(10, "Minimum 10 characters"),
});

export default function ContactForm({ onClose }) {
  return (
    <div className="contact-overlay">
      <div className="contact-glass">
        <span className="close-btnform" onClick={onClose}>×</span>

        <h2>Contact Us</h2>
        <p>We’d love to hear from you</p>

        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            alert("Message sent successfully!");
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="contact-form">
              <div className="field">
                <Field name="name" placeholder="Full Name" />
                <ErrorMessage name="name" component="span" />
              </div>

              <div className="field">
                <Field name="email" placeholder="Email Address" />
                <ErrorMessage name="email" component="span" />
              </div>

              <div className="field">
                <Field name="phone" placeholder="Mobile Number" />
                <ErrorMessage name="phone" component="span" />
              </div>

              <div className="field">
                <Field as="textarea" name="message" placeholder="Your Message" rows="4" />
                <ErrorMessage name="message" component="span" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
