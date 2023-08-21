import React from 'react';

import classNames from 'classnames';
import { TbCircleX } from 'react-icons/tb';

const ModalHeader = ({
  theme,
  image,
  icon,
  close,
  title,
  subTitle,
  altImage,
}) => {
  return (
    <div className="space-y-2 flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-6">
        {image && (
          <img
            className={classNames(
              theme === 'dark' ? 'raised-dark' : 'raised',
              'rounded-full border-[2px] object-cover w-[72px] h-[72px]'
            )}
            src={image}
            alt={altImage}
          ></img>
        )}
        {icon && (
          <div
            className={classNames(
              theme === 'dark' ? 'raised-dark' : 'raised',
              'rounded-full flex items-center border-[2px] object-cover w-[72px] h-[72px]'
            )}
          >
            {icon}
          </div>
        )}

        <div className="flex flex-col justify-center text-left">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm">{subTitle}</p>
        </div>
      </div>
      <button
        className={classNames(
          theme === 'dark' ? 'raised-dark' : 'raised',
          'p-2 rounded-full hover:text-neoMiddleBlue absolute right-7 top-6'
        )}
        onClick={close}
      >
        <TbCircleX size={'1.5rem'} />
      </button>
    </div>
  );
};
export default ModalHeader;
