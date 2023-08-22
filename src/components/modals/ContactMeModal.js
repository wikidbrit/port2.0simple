import React, { useContext } from 'react';

import classNames from 'classnames';
import ThemeContext from '../../context/ThemeContext';

import { TbMessageShare } from 'react-icons/tb';
import ModalHeader from './components/ModalHeader';
import Form from './components/Form';

const ContactMeModal = ({ close }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        theme === 'dark' ? 'bg-darkNeoForeground' : 'bg-neoBackground',
        'text-neoGrey space-y-6 p-6 rounded-lg w-[30rem]'
      )}
    >
      <ModalHeader
        theme={theme}
        close={close}
        icon={
          <TbMessageShare
            className="mx-auto text-neoMiddleBlue"
            size={'1.8rem'}
          />
        }
        title={'Contact Me'}
        subTitle={'Get in touch with me.'}
      />
      <p className="leading-7">
        I encourage you to reach out to collaborate on your next project, or
        just to say hi!
      </p>
      <Form close={close} />
    </div>
  );
};
export default ContactMeModal;
