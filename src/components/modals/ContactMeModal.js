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
        'text-neoGrey space-y-6 p-6 rounded-lg '
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
      <div className="flex flex-row space-x-4 items-center">
        <Form />
        <p className="text-center w-full text-[7rem]">💬</p>
      </div>
    </div>
  );
};
export default ContactMeModal;
