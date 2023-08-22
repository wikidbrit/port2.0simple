import React from "react";

import classNames from "classnames";
import { TbCircleX } from "react-icons/tb";

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
    <div className="flex flex-row items-center justify-between space-y-2">
      <div className="flex flex-row space-x-6">
        {image && (
          <img
            className={classNames(
              theme === "dark" ? "raised-dark" : "raised",
              "h-[72px] w-[72px] rounded-full border-[2px] object-cover",
            )}
            src={image}
            alt={altImage}
          ></img>
        )}
        {icon && (
          <div
            className={classNames(
              theme === "dark" ? "raised-dark" : "raised",
              "flex h-[72px] w-[72px] items-center rounded-full border-[2px] object-cover",
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
          theme === "dark" ? "raised-dark" : "raised",
          "absolute right-7 top-6 rounded-full p-2 hover:text-neoMiddleBlue",
        )}
        onClick={close}
      >
        <TbCircleX size={"1.5rem"} />
      </button>
    </div>
  );
};
export default ModalHeader;
