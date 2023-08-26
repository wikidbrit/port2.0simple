import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { PaulLogoDark, PaulLogoLight } from "../../assets/svgs";
import { HashLink } from "react-router-hash-link";
import Popup from "reactjs-popup";
import AboutMeModal from "../modals/AboutMeModal";
import classNames from "classnames";
import MainButton from "../buttons/MainButton";

const MainNavigation = () => {
  const theme = useContext(ThemeContext);
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  const contentStyle = {
    background: "#2EB2EC",
    borderRadius: "2rem",
  };

  return (
    <div
      className={classNames(
        theme === "dark" ? "" : "",
        "z-50 mx-auto w-full px-5 tracking-wide shadow-sm",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-row items-center justify-between py-2">
        <div>
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
        </div>

        <div>
          <ul
            className={classNames(
              theme === "dark" ? "text-steel-400" : "text-water-900",
              "flex flex-row space-x-16 text-sm",
            )}
          >
            <li>
              <HashLink to={"/#Projects"}>Projects</HashLink>
            </li>
            <li>
              <Popup
                modal
                nested
                trigger={<button>About</button>}
                {...{ overlayStyle, contentStyle }}
              >
                {(close) => <AboutMeModal close={close} />}
              </Popup>
            </li>
            <li>Resume</li>
          </ul>
        </div>

        <div>
          <MainButton text={"Contact"} />
        </div>
      </div>
    </div>
  );
};
export default MainNavigation;
