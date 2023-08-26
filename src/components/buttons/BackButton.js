import React from "react";

import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

const BackButton = ({ to, className, icon, layout }) => {
  return (
    <HashLink to={to}>
      <div
        layout={layout}
        className={classNames(
          className,
          "new-button flex h-10 w-10 place-content-center items-center text-center transition-all duration-200 hover:scale-105 active:scale-95",
        )}
      >
        {icon}
      </div>
    </HashLink>
  );
};
export default BackButton;
