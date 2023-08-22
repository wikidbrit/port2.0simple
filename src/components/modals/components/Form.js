import React, { useContext } from 'react';
import classNames from 'classnames';

import ThemeContext from '../../../context/ThemeContext';

import { NetlifyForm, Honeypot } from 'react-netlify-forms';

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
                className="rounded-lg p-1 border-neoGrey border-[1px] focus:ring-neoMiddleBlue focus:border-neoMiddleBlue focus:outline-none focus:ring-2"
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
                className="rounded-lg p-1 border-neoGrey border-[1px] focus:ring-neoMiddleBlue focus:border-neoMiddleBlue focus:outline-none focus:ring-2"
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
                className="rounded-lg p-1 border-neoGrey border-[1px]  focus:ring-neoMiddleBlue focus:border-neoMiddleBlue focus:outline-none focus:ring-2"
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row justify-between">
              <button type="submit" className="raised px-6 py-3 rounded-lg">
                Submit
              </button>
              <button
                className={classNames(
                  theme === 'dark' ? 'raised-dark' : 'raised',
                  'px-8 py-3 rounded-lg flex'
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
