import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../components/contact.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(""); // Clear the error message when input changes
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(""); // Clear the error message when input changes

    // Check for dot (.) and @ symbol in the email
    if (!emailValue.includes(".") || !emailValue.includes("@")) {
      setEmailError("Please enter a valid email address");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(""); // Clear the error message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (name.trim() === "") {
      setNameError("Please enter your name");
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email");
    }

    if (message.trim() === "") {
      setMessageError("Please enter your message");
    }

    // Check if any errors exist
    if (!nameError && !emailError && !messageError) {
      setIsFormSubmitted(true); // Set the form submitted state immediately
      setIsButtonDisabled(true); // Disable the button to prevent multiple submissions

      const templateParams = {
        from_name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          "service_r7fm7zk",
          "template_lwqk383",
          templateParams,
          "dPX897__2GGaQ6uTD"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Reset the form fields
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsButtonDisabled(false); // Re-enable the button after submission
        });
    }
  };

  return (
    <section>
      <div className="contact-form">
        <h1>Contact</h1>
        {isFormSubmitted ? (
          <p className="success-sent">Message sent!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
              {nameError && <p className="error">{nameError}</p>}
            </div>
            <div>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
              />
              {messageError && <p className="error">{messageError}</p>}
            </div>
            <button type="submit" disabled={isButtonDisabled}>
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
