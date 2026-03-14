"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const StudentInquiryForm = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e:any) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const qualification = formData.get("qualification");
    const country = formData.get("country");
    const course = formData.get("course");
    const message = formData.get("message");

    // EMAILJS
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );

    // WHATSAPP MESSAGE
    const whatsappMessage =
      `New Student Inquiry%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Qualification: ${qualification}%0A` +
      `Country: ${country}%0A` +
      `Course: ${course}%0A` +
      `Message: ${message}`;

    const whatsappURL =
      `https://api.callmebot.com/whatsapp.php?phone=91XXXXXXXXXX&text=${whatsappMessage}&apikey=YOUR_API_KEY`;

    fetch(whatsappURL);

    alert("Your inquiry has been submitted successfully!");

    form.current.reset();
  };

  return (
    <section className="student-inquiry">
      <div className="container">

        <h2 className="form-title">
          Start Your Study Abroad Journey
        </h2>

        <form ref={form} onSubmit={sendEmail} className="inquiry-form">

          <div className="form-grid">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
            />

            <input
              type="text"
              name="qualification"
              placeholder="Your Qualification"
              required
            />

            <select name="country" required>
              <option value="">Preferred Country</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>Ireland</option>
            </select>

            <input
              type="text"
              name="course"
              placeholder="Preferred Course"
              required
            />

          </div>

          <textarea
            name="message"
            placeholder="Tell us about your study plans"
            rows={4}
          />

          <button type="submit" className="submit-btn">
            Book Free Consultation
          </button>

        </form>
      </div>
    </section>
  );
};

export default StudentInquiryForm;