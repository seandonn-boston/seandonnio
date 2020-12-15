import React, { useReducer } from "react";

import { Form } from "../../global/ui/Form/Form";
import { Fieldset } from "../../global/ui/Form/Fieldset/Fieldset";
import { Legend } from "../../global/ui/Form/Fieldset/Legend/Legend";
import { Input } from "../../global/ui/Form/Input/Input";
import { Label } from "../../global/ui/Form/Label/Label";
import { Textarea } from "../../global/ui/Form/Textarea/Textarea";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = "email";
const PHONE = "phone";
const EMPLOYER = "employer";
const MESSAGE = "message";
const IS_CUSTOM_MESSAGE = "isCustomMessage";
const SUBJECT = "subject";
const RECIPIENT = "sean@seandonn.io";

const initialState = {
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [EMAIL]: "",
  [PHONE]: "",
  [EMPLOYER]: "",
  [SUBJECT]: "",
  [MESSAGE]: {
    [IS_CUSTOM_MESSAGE]: false,
    [MESSAGE]: `Dear Sean,\n\nMy employer is looking to recruit a talented Front End Software Engineer skilled in React, CSS, and more. I think you would be a great fit for this opportunity and I would love to speak with you about our open position.\n\nThank you,`,
  },
};

const reducer = (state, payload) => {
  switch (Object.keys(payload)[0]) {
    case "reset":
      return { ...payload.reset };
    case MESSAGE:
      return {
        ...state,
        [MESSAGE]: { ...payload, [IS_CUSTOM_MESSAGE]: true },
      };
    case SUBJECT:
      return { ...state, ...payload };
    case FIRST_NAME:
    case LAST_NAME:
    case PHONE:
    case EMAIL:
    case EMPLOYER:
      return {
        ...state,
        ...payload,
        [MESSAGE]: state[MESSAGE][IS_CUSTOM_MESSAGE]
          ? { ...state[MESSAGE] }
          : {
              ...state[MESSAGE],
              [MESSAGE]: `Dear Sean,\n\nMy employer ${
                (payload[EMPLOYER] ? payload[EMPLOYER] : state[EMPLOYER]) +
                (payload[EMPLOYER] || state[EMPLOYER] ? " " : "")
              }is looking to recruit a talented Front End Software Engineer skilled in React, CSS, and more. I think you would be a great fit for this opportunity and I would love to speak with you about our open position.${
                (payload[PHONE] || state[PHONE]) &&
                ` Feel free to call me at ${
                  payload[PHONE] ? payload[PHONE] : state[PHONE]
                }.`
              }\n\nThank you,${
                payload[FIRST_NAME] ||
                state[FIRST_NAME] ||
                payload[LAST_NAME] ||
                state[LAST_NAME]
                  ? "\n"
                  : ""
              }${
                payload[FIRST_NAME] ? payload[FIRST_NAME] : state[FIRST_NAME]
              }${
                (payload[FIRST_NAME] && state[LAST_NAME]) ||
                (state[FIRST_NAME] && payload[LAST_NAME]) ||
                (state[FIRST_NAME] && state[LAST_NAME])
                  ? " "
                  : ""
              }${payload[LAST_NAME] ? payload[LAST_NAME] : state[LAST_NAME]}${
                (payload[EMAIL] || state[EMAIL] ? "\n" : "") +
                (payload[EMAIL] ? payload[EMAIL] : state[EMAIL])
              }`,
            },
      };
    default:
      return { ...state };
  }
};

export default function ContactPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch({ reset: initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURI(state[SUBJECT]);
    const body = encodeURI(state[MESSAGE][MESSAGE]);
    window.open(`mailto:${RECIPIENT}?subject=${subject}&body=${body}`);
  };

  return (
    <>
      <h1>Contact</h1>
      <Form handleSubmit={handleSubmit}>
        <Fieldset>
          <Legend title="Contact Info" />
          <Label htmlFor={FIRST_NAME} title="First Name" />
          <Input
            type="text"
            name={FIRST_NAME}
            value={state[`${FIRST_NAME}`]}
            handleChange={handleChange}
            placeholder="First Name"
          />
          <Label htmlFor={LAST_NAME} title="Last Name" />
          <Input
            type="text"
            name={LAST_NAME}
            value={state[`${LAST_NAME}`]}
            handleChange={handleChange}
            placeholder="Last Name"
          />
          <Label htmlFor={EMAIL} title="Email" />
          <Input
            type="email"
            name={EMAIL}
            value={state[`${EMAIL}`]}
            handleChange={handleChange}
            placeholder="email"
          />
          <Label htmlFor={PHONE} title="Phone" />
          <Input
            type="tel"
            name={PHONE}
            value={state[`${PHONE}`]}
            handleChange={handleChange}
            placeholder="Phone"
          />
          <Label htmlFor={EMPLOYER} title="Employer" />
          <Input
            type="text"
            name={EMPLOYER}
            value={state[`${EMPLOYER}`]}
            handleChange={handleChange}
            placeholder="Employer"
          />
        </Fieldset>
        <Fieldset id="userMessage">
          <Legend title="Message" />
          <Label htmlFor={SUBJECT} title="Subject" />
          <Input
            type="text"
            name={SUBJECT}
            value={state[`${SUBJECT}`]}
            handleChange={handleChange}
            placeholder="Subject"
          />
          <Label htmlFor={MESSAGE} title="Message" />
          <Textarea
            type="text"
            name={MESSAGE}
            handleChange={handleChange}
            value={state[`${MESSAGE}`][`${MESSAGE}`]}
            placeholder="Hello Sean..."
            rows={9}
            cols={10}
          />
        </Fieldset>
        <Input
          type="reset"
          name="Reset"
          value="Reset"
          handleClick={handleReset}
        />
        <Input type="submit" name="Send" value="Send" />
      </Form>
    </>
  );
}
