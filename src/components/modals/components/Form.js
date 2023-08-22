import React, { useContext } from "react";
import classNames from "classnames";

import ThemeContext from "../../../context/ThemeContext";

import { NetlifyForm, Honeypot } from "react-netlify-forms";

const Form = ({ close }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
        {({ handleChange, success, error }) => (
          <div className="space-y-6">
            <Honeypot />
            {success && <p>Thanks for reaching out!</p>}
            {error && (
              <p>
                Sorry, server unavailable at the moment. Please try again later.
              </p>
            )}
            <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <input
                className={classNames(
                  theme === "dark"
                    ? "bg-darkNeoBackground"
                    : "bg-neoBackground",
                  "rounded-lg border-[1px] border-neoGrey p-1 focus:border-neoMiddleBlue focus:outline-none focus:ring-2 focus:ring-neoMiddleBlue",
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
                  "rounded-lg border-[1px] border-neoGrey p-1 focus:border-neoMiddleBlue focus:outline-none focus:ring-2 focus:ring-neoMiddleBlue",
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
                  "rounded-lg border-[1px] border-neoGrey p-1 focus:border-neoMiddleBlue focus:outline-none focus:ring-2 focus:ring-neoMiddleBlue",
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
              <button
                type="submit"
                className={classNames(
                  theme === "dark" ? "raised-dark" : "raised",
                  "flex rounded-lg px-8 py-3",
                )}
              >
                Submit
              </button>
              <button
                className={classNames(
                  theme === "dark" ? "raised-dark" : "raised",
                  "flex rounded-lg px-8 py-3",
                )}
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </NetlifyForm>
    </div>
  );
};
export default Form;
