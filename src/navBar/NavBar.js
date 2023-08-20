import React from 'react';

import Switch from 'react-switch';
import Popup from 'reactjs-popup';
import CtaButton from '../components/buttons/CtaButton';
import { TbSun, TbMoon } from 'react-icons/tb';

import ModalContainer from '../components/containers/ModalContainer';

const NavBar = ({ handleChange, theme }) => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <Switch
        borderRadius={5}
        height={22}
        width={50}
        boxShadow="3px 3px 3px 0px rgba(190, 190, 190, 0.65), -3px -3px 3px 0px rgba(255, 255, 255, 0.65)"
        onChange={handleChange}
        checked={theme === 'dark'}
        offHandleColor="#E9EDF0"
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
