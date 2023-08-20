import React, { useMemo, useContext } from 'react';

import Switch from 'react-switch';
import Popup from 'reactjs-popup';
import CtaButton from '../components/buttons/CtaButton';
import { TbSun, TbMoon } from 'react-icons/tb';

import ThemeContext from '../context/ThemeContext';
import ModalContainer from '../components/containers/ModalContainer';
import classNames from 'classnames';

const NavBar = ({ handleChange, theme }) => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  const themeColor = useContext(ThemeContext);
  const handleColor = useMemo(() => {
    return themeColor === 'dark' ? '#1D1E1E' : '#E9EDF0';
  }, [themeColor]);

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div
        className={classNames(
          themeColor === 'dark' ? 'raised-dark' : 'raised',
          'p-1 h-8 rounded-lg'
        )}
      >
        <Switch
          borderRadius={5}
          height={22}
          width={50}
          boxShadow={false}
          onChange={handleChange}
          checked={theme === 'dark'}
          offHandleColor={handleColor}
          onHandleColor={handleColor}
          offColor="#2EB2EC"
          onColor="#2EB2EC"
          uncheckedIcon={
            <TbSun className="mx-auto text-neoBackground translate-y-[3px]" />
          }
          checkedIcon={
            <TbMoon className="mx-auto text-neoBackground translate-y-[3px]" />
          }
        />
      </div>

      <div className="flex flex-row space-x-8 items-center">
        <ul className="flex space-x-12 items-center">
          <li className="text-neoGrey">
            <a>About</a>
          </li>
          <li className="text-neoGrey">
            <a>Projects</a>
          </li>
          <li>
            <Popup
              modal
              nested
              trigger={<CtaButton theme={theme} text="Contact" />}
              {...{ overlayStyle }}
            >
              <ModalContainer title={'Contact Me'}>
                <p>pflemingonline@gmail.com</p>
              </ModalContainer>
            </Popup>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
