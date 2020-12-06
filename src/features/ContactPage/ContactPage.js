import React, { useReducer } from "react";

import {
  contact,
  contactForm,
  contactFormFieldset,
  contactFormLabel,
  contactFormInput,
  contactFormTextarea,
  contactFormSubmit,
} from "./ContactPage.scss";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = "email";
const MESSAGE = "message";
const SUBJECT = "subject";
const RECIPIENT = "sean@seandonn.io";

export default function ContactPage() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      [FIRST_NAME]: "",
      [LAST_NAME]: "",
      [EMAIL]: "",
      [SUBJECT]: "",
      [MESSAGE]: "",
    }
  );

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const string = `mailto:${RECIPIENT}&subject=${encodeURI(
      userInput[SUBJECT]
    )}&body=${encodeURI(userInput[MESSAGE])}`;

    window.open(string);
  };

  // TODO: DRY this up
  return (
    <div className={contact}>
      <h1>Contact</h1>
      <form className={contactForm} onSubmit={handleSubmit}>
        <fieldset className={contactFormFieldset} id="userData">
          <label className={contactFormLabel} htmlFor={FIRST_NAME}>
            First Name:
          </label>
          <input
            className={contactFormInput}
            type="text"
            name={FIRST_NAME}
            value={userInput[{ FIRST_NAME }]}
            onChange={handleChange}
          />
          <label className={contactFormLabel} htmlFor={LAST_NAME}>
            Last Name:
          </label>
          <input
            className={contactFormInput}
            type="text"
            name={LAST_NAME}
            value={userInput[{ LAST_NAME }]}
            onChange={handleChange}
          />
          <label className={contactFormLabel} htmlFor={EMAIL}>
            Email:
          </label>
          <input
            className={contactFormInput}
            type="email"
            name={EMAIL}
            value={userInput[{ EMAIL }]}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className={contactFormFieldset} id="userMessage">
          <label className={contactFormLabel} htmlFor={SUBJECT}>
            Subject:
          </label>
          <input
            className={contactFormInput}
            type="text"
            name={SUBJECT}
            value={userInput[{ SUBJECT }]}
            onChange={handleChange}
          />
          <label className={contactFormLabel} htmlFor={MESSAGE}>
            What would you like the message to say?
          </label>
          <textarea
            className={contactFormTextarea}
            type="text"
            name={MESSAGE}
            value={userInput[{ MESSAGE }]}
            onChange={handleChange}
            placeholder="Hello Sean..."
          />
        </fieldset>
        <input className={contactFormSubmit} type="submit" value="Send" />
      </form>
    </div>
  );
}
