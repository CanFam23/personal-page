import "./Contact.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Contact() {
  // States for controlling error / success message
  const [showMsg, setShowMsg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("Email sent!");
  const { register, handleSubmit, setValue } = useForm();

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  // Display message for 10 seconds
  useEffect(() => {
    if (!showMsg) return;

    const timer = setTimeout(() => {
      setShowMsg(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [showMsg]);

  // Submit form
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "9c22eba1-3e21-4e2d-9f44-acc0631c81cb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Email sent!");
      setSuccess(true);
      form.reset();
    } else {
      setMessage("Error sending email, please try again.");
      setSuccess(false);
    }

    setShowMsg(true);
  };

  return (
    <div id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form id="contact-form" onSubmit={onSubmit}>
        <label htmlFor="input-name">Your Name</label>
        <input
          id="input-name"
          type="text"
          name="name"
          autoComplete="off"
          placeholder="John Doe"
          required
        />

        <label htmlFor="input-email">Your Email</label>
        <input
          id="input-email"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="johndoe@example.com"
          required
        />

        <label htmlFor="input-text">Subject</label>
        <input
          id="input-text"
          type="text"
          name="subject"
          autoComplete="off"
          placeholder="Se.g., Website Feedback, Feature Request, Interview invite"
          required
        />

        <label htmlFor="input-message">Message</label>
        <textarea
          id="input-message"
          name="message"
          autoComplete="off"
          required
        ></textarea>

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
          id="h-captcha"
        />

        <button id="submit-btn" type="submit" aria-label="Submit contact form">
          Submit Form
        </button>

        {showMsg && (
          <p
            id="form-msg"
            style={{ "background-color": success ? "green" : "red" }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
