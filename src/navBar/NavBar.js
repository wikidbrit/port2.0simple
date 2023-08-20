import React, { useMemo, useContext } from 'react';

import Switch from 'react-switch';
import Popup from 'reactjs-popup';
import CtaButton from '../components/buttons/CtaButton';
import { TbSun, TbMoon } from 'react-icons/tb';

import ThemeContext from '../context/ThemeContext';
import ModalContainer from '../components/containers/ModalContainer';

const NavBar = ({ handleChange, theme }) => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  const themeColor = useContext(ThemeContext);
  const handleColor = useMemo(() => {
    return themeColor === 'dark' ? '#1D1E1E' : '#E9EDF0';
  }, [themeColor]);

  const shadowStyle = useMemo(() => {
    return themeColor === 'dark'
      ? '8px 8px 20px #181919, -8px -8px 20px #222323'
      : '11px 11px 22px #dfdede,-11px -11px 22px #f9f9f9';
  });

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <Switch
        borderRadius={5}
        height={22}
        width={50}
        boxShadow={shadowStyle}
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
