import React, { useContext } from 'react';

import Popup from 'reactjs-popup';
import NavButton from '../components/buttons/NavButton';

import ThemeContext from '../context/ThemeContext';
import classNames from 'classnames';
import DarkModeToggle from './components/DarkModeToggle';

import { TbUserShare, TbBriefcase, TbMessageShare } from 'react-icons/tb';
import AboutMeModal from '../components/modals/AboutMeModal';
import ContactMeModal from '../components/modals/ContactMeModal';

const NavBar = ({ handleChange, theme }) => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
  const contentStyle = {
    background: '#2EB2EC',
    borderRadius: '2rem',
  };

  const contactContentStyle = {
    background: '#2EB2EC',
    borderRadius: '2rem',
  };

  const themeColor = useContext(ThemeContext);

  return (
    <div className="w-[14.2rem] right-0 h-full fixed pt-[10rem] px-14 text-center">
      <div className="flex flex-col space-y-8">
        <ul className="flex flex-col space-y-3 justify-end">
          <Popup
            modal
            nested
            trigger={
              <NavButton
                icon={<TbUserShare size={'1.2rem'} />}
                theme={theme}
              ></NavButton>
            }
            {...{ overlayStyle, contentStyle }}
          >
            {(close) => <AboutMeModal close={close} />}
          </Popup>

          <li className="text-neoGrey">
            <NavButton
              hash
              icon={<TbBriefcase size={'1.2rem'} />}
              theme={theme}
              to={'/#Projects'}
            ></NavButton>
          </li>
          <li>
            <Popup
              modal
              nested
              trigger={
                <NavButton
                  theme={theme}
                  icon={<TbMessageShare size={'1.2rem'} />}
                />
              }
              {...{ overlayStyle, contactContentStyle }}
            >
              {(close) => <ContactMeModal close={close} />}
            </Popup>
          </li>
          <div
            className={classNames(
              themeColor === 'dark' ? 'raised-dark' : 'raised',
              'p-[2px] h-7 rounded-full w-fit'
            )}
          >
            <DarkModeToggle handleChange={handleChange} />
          </div>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
