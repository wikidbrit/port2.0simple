import React, { useContext } from 'react';

import Popup from 'reactjs-popup';
import NavButton from '../components/buttons/NavButton';

import ThemeContext from '../context/ThemeContext';
import ModalContainer from '../components/containers/ModalContainer';
import classNames from 'classnames';
import DarkModeToggle from './components/DarkModeToggle';

const NavBar = ({ handleChange, theme }) => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  const themeColor = useContext(ThemeContext);

  return (
    <div className="w-[14.2rem] right-0 h-full fixed pt-28 px-14 text-center">
      <div className="flex flex-col space-y-10">
        <ul className="flex flex-col space-y-5 justify-end">
          <Popup
            modal
            nested
            trigger={
              <NavButton
                text="About"
                theme={theme}
                className="text-neoGrey"
              ></NavButton>
            }
            {...{ overlayStyle }}
          >
            <ModalContainer title={'About me'}>
              <p>My name is paul and I like cats</p>
            </ModalContainer>
          </Popup>

          <li className="text-neoGrey">
            <NavButton
              text={'Projects'}
              theme={theme}
              to={'/#Projects'}
            ></NavButton>
          </li>
          <li>
            <Popup
              modal
              nested
              trigger={<NavButton theme={theme} text="Contact" />}
              {...{ overlayStyle }}
            >
              <ModalContainer title={'Contact Me'}>
                <p>pflemingonline@gmail.com</p>
              </ModalContainer>
            </Popup>
          </li>
        </ul>
        <div
          className={classNames(
            themeColor === 'dark' ? 'raised-dark' : 'raised',
            'p-1 h-8 rounded-lg w-fit'
          )}
        >
          <DarkModeToggle handleChange={handleChange} />
        </div>
      </div>
      {/* <div
        className={classNames(
          themeColor === 'dark' ? 'raised-dark' : 'raised',
          'p-1 h-8 rounded-lg'
        )}
      >
        <DarkModeToggle handleChange={handleChange} />
      </div>

      <div className="flex flex-row space-x-8 items-center">
        <ul className="flex space-x-12 items-center">
          <Popup
            modal
            nested
            trigger={<button className="text-neoGrey">About</button>}
            {...{ overlayStyle }}
          >
            <ModalContainer title={'About me'}>
              <p>My name is paul and I like cats</p>
            </ModalContainer>
          </Popup>

          <li className="text-neoGrey">
            <button onClick={handleScroll} href={'#Projects'}>
              Projects
            </button>
          </li>
          <li>
            <Popup
              modal
              nested
              trigger={<NavButton theme={theme} text="Contact" />}
              {...{ overlayStyle }}
            >
              <ModalContainer title={'Contact Me'}>
                <p>pflemingonline@gmail.com</p>
              </ModalContainer>
            </Popup>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
export default NavBar;
