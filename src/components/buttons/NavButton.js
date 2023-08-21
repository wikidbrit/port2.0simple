import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavButton = ({ icon, text, onClick, theme, to }) => {
  if (text === 'Projects') {
    return (
      <HashLink
        to={to}
        onClick={onClick}
        className={classNames(
          theme === 'dark' ? 'raised-dark' : 'raised',
          'text-neoGrey py-3 px-3 rounded-md w-full flex flex-row items-center space-x-4 duration-200 hover:text-neoMiddleBlue transition-all'
        )}
      >
        <div className="mx-auto">{icon}</div>
        {text && <p className="pr-3 w-full">{text}</p>}
      </HashLink>
    );
  }
  return (
    <Link
      to={to}
      onClick={onClick}
      className={classNames(
        theme === 'dark' ? 'raised-dark' : 'raised',
        'text-neoGrey py-3 px-3 rounded-md w-fit flex flex-row items-center space-x-4 duration-200 hover:text-neoMiddleBlue transition-all group'
      )}
    >
      {' '}
      <div className="mx-auto group-hover:animate-pulse">{icon}</div>
      {text && <p className="pr-3 w-full">{text}</p>}
    </Link>
  );
};
export default NavButton;
