import React from "react";

import classNames from "classnames";
import { TbX } from "react-icons/tb";
import IconButtonSmall from "../../buttons/IconButtonSmall";

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
    <div
      className={classNames(
        theme === "dark" ? "text-steel-300" : "text-steel-800",
        "flex flex-row items-center justify-between space-y-2",
      )}
    >
      <div className="flex flex-row space-x-6">
        {image && (
          <img
            className={classNames(
              theme === "dark" ? "" : "",
              "h-[72px] w-[72px] rounded-full border-[2px] border-steel-600 object-cover",
            )}
            src={image}
            alt={altImage}
          ></img>
        )}
        {icon && (
          <div
            className={classNames(
              theme === "dark"
                ? " border-neoMiddleBlue"
                : "border-neoMiddleBlue",
              "flex h-[72px] w-[72px] items-center rounded-full border-[2px]  object-cover",
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
      <IconButtonSmall
        onClick={close}
        icon={<TbX color="#D6D6D6" size={"1.2rem"} />}
      />
    </div>
  );
};
export default ModalHeader;
