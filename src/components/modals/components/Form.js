import React, { useContext } from "react";
import classNames from "classnames";

import ThemeContext from "../../../context/ThemeContext";

import { NetlifyForm, Honeypot } from "react-netlify-forms";
import MainButton from "../../buttons/MainButton";

const Form = ({ close }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <NetlifyForm
        name="Contact"
        action="/thanks"
        honeypotName="bot-field"
        netlify
      >
        {({ handleChange, success, error }) => (
          <div className="space-y-6">
            <Honeypot />
            {success && (
              <p className="border-[2px] border-green-900 p-6">
                Thanks for your message, I will get back to you as soon as
                possible
              </p>
            )}
            {error && (
              <p className="border-[2px] border-red-900 p-6">
                Sorry, server unavailable at the moment.<br></br>Please try
                again later.
              </p>
            )}
            <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <input
                className={classNames(
                  theme === "dark"
                    ? "bg-darkNeoBackground"
                    : "bg-neoBackground",
                  "border-[1px] border-neoGrey p-1 focus:border-neoMiddleBlue focus:outline-none focus:ring-2 focus:ring-neoMiddleBlue",
                )}
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email">Email:</label>
              <input
                className={classNames(
                  theme === "dark"
                    ? "bg-darkNeoBackground"
                    : "bg-neoBackground",
                  "border-[1px] border-neoGrey p-1 focus:border-neoMiddleBlue focus:outline-none focus:ring-2 focus:ring-neoMiddleBlue",
                )}
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message:</label>
              <textarea
                className={classNames(
                  theme === "dark"
                    ? "bg-darkNeoBackground"
                    : "bg-neoBackground",
                  "border-[1px] border-neoGrey p-1 focus:border-neoMiddleBlue focus:outline-none focus:ring-2 focus:ring-neoMiddleBlue",
                )}
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row justify-between">
              <MainButton type="submit" text={"Send Message"} />
              <MainButton onClick={close} text={"Close"} />
            </div>
          </div>
        )}
      </NetlifyForm>
    </div>
  );
};
export default Form;
