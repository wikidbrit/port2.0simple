import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import classNames from 'classnames';

const ProjectButton = ({ text, icon, onClick }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={classNames(
        theme === 'dark' ? 'raised-dark' : 'raised',
        'h-full p-4 relative rounded-xl'
      )}
    >
      <div className="rounded-full p-2 h-fit w-fit absolute right-2 top-2">
        {icon}
      </div>
      <p className="text-2xl text-neoGrey absolute bottom-4 left-4">{text}</p>
    </button>
  );
};
export default ProjectButton;
