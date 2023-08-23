import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { PaulLogoDark, PaulLogoLight } from "../../assets/svgs";
import { HashLink } from "react-router-hash-link";
import Popup from "reactjs-popup";
import AboutMeModal from "../modals/AboutMeModal";
import classNames from "classnames";

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
        theme === "dark"
          ? "border-water-900 from-bgBlueDark to-bgBlueLight"
          : "border-steel-200 from-steel-100 to-steel-300",
        "fixed z-50 mx-auto w-full border-b-[2px]  bg-gradient-to-r shadow-sm",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-row items-center justify-between px-10 py-2">
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
              theme === "dark" ? "text-steel-50" : "text-water-900",
              "flex flex-row space-x-8 text-sm",
            )}
          >
            <li>
              <HashLink to={"/#home"}>Home</HashLink>
            </li>
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
          <button className="new-button px-5 py-3 font-medium text-steel-50 duration-200 hover:-translate-y-[2px]">
            <p className=" shadow-sm">Contact</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainNavigation;
