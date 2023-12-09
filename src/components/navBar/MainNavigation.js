import React, { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";
import { HashLink } from "react-router-hash-link";
import Popup from "reactjs-popup";

import { PaulLogoDark, PaulLogoLight } from "../../assets/svgs";
import AboutMeModal from "../modals/AboutMeModal";
import classNames from "classnames";
import MainButton from "../buttons/MainButton";
import ContactMeModal from "../modals/ContactMeModal";
import useGetBreakpoints from "../../hooks/useGetBreakpoints";

import pdf from "../../pdfs/PaulFleming_Resume_v1.6.pdf";

const MainNavigation = () => {
  const theme = useContext(ThemeContext);
  const { isDesktop } = useGetBreakpoints();

  console.log(isDesktop);

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
      <div className="mx-auto flex flex-row items-center justify-between py-2 lg:w-screen lg:max-w-[1400px]">
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

        <di className="hidden lg:block">
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
                {...{ contentStyle }}
              >
                {(close) => <AboutMeModal close={close} />}
              </Popup>
            </li>
            <li>
              <a href={pdf} target="blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </di>

        <div>
          <Popup
            modal
            nested
            trigger={<MainButton text={"Contact"} {...{ contentStyle }} />}
          >
            {(close) => <ContactMeModal close={close} />}
          </Popup>
        </div>
      </div>
    </div>
  );
};
export default MainNavigation;
