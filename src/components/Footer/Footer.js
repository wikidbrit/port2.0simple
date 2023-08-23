import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { PaulLogoDark, PaulLogoLight } from "../../assets/svgs";
import classNames from "classnames";
import AlternatingToggle from "../../navBar/components/AlternatingToggle";

const Footer = ({ handleChange }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex h-48 flex-row justify-between">
      <div className="flex h-full flex-col place-content-between text-sm">
        <div className="w-16 duration-300">
          {theme === "dark" && (
            <div className="w-fit">
              <PaulLogoLight />
            </div>
          )}
          {theme === "light" && (
            <div className="w-fit">
              <PaulLogoDark />
            </div>
          )}
        </div>
        <AlternatingToggle handleChange={handleChange} />
        <div
          className={classNames(
            theme === "dark" ? "text-steel-100" : "text-water-900",
            "text-sm ",
          )}
        >
          <ul className="space-y-2">
            <li>pflemingonline@gmail.com</li>
            <li>073 953 94 69</li>
            <li>Stockholm, Sweden</li>
          </ul>
        </div>
      </div>

      <div
        className={classNames(
          theme === "dark" ? "text-steel-100" : "text-water-900",
          "flex h-full flex-col place-content-between text-sm",
        )}
      >
        <div>Icons</div>
        <div className="align-bottom">© Paul Fleming 2023</div>
      </div>
    </div>
  );
};
export default Footer;
