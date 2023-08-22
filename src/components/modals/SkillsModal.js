import React, { useContext } from 'react';
import ModalHeader from './components/ModalHeader';
import classNames from 'classnames';

import ThemeContext from '../../context/ThemeContext';

import { TbChecklist } from 'react-icons/tb';
import SkillGague from './components/SkillGague';

const SkillsModal = ({ close }) => {
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
        title={'My skillset'}
        subTitle={'I know stuff, all sorts of stuff.'}
        icon={
          <TbChecklist className="mx-auto text-neoMiddleBlue" size={'1.8rem'} />
        }
      />
      <div>
        <SkillGague icon={'💻'} percent={100} />
      </div>
    </div>
  );
};
export default SkillsModal;
