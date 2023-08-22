import React, { useContext } from "react";

import Popup from "reactjs-popup";
import NavButton from "../components/buttons/NavButton";

import ThemeContext from "../context/ThemeContext";
import classNames from "classnames";
import DarkModeToggle from "./components/DarkModeToggle";

import { TbUserShare, TbBriefcase, TbMessageShare } from "react-icons/tb";
import AboutMeModal from "../components/modals/AboutMeModal";
import ContactMeModal from "../components/modals/ContactMeModal";
import { FiArrowLeft } from "react-icons/fi";

const NavBar = ({ handleChange, theme, hero, template }) => {
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  const contentStyle = {
    background: "#2EB2EC",
    borderRadius: "2rem",
  };

  const contactContentStyle = {
    background: "#2EB2EC",
    borderRadius: "2rem",
  };

  const themeColor = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        hero ? "flex-col space-y-10" : "flex-row space-x-20",
        "mx-auto flex w-fit items-center justify-between rounded-full p-2 duration-200",
      )}
    >
      <div
        className={classNames(
          themeColor === "dark" ? "raised-dark" : "raised",
          "flex h-7 w-fit items-center rounded-full p-[2px]",
        )}
      >
        <DarkModeToggle handleChange={handleChange} />
      </div>

      <ul
        className={classNames(
          hero ? "flex-col space-y-4" : "flex-row space-x-4",
          "flex items-center",
        )}
      >
        <Popup
          modal
          nested
          trigger={
            <NavButton
              icon={<TbUserShare size={"1.2rem"} />}
              theme={theme}
            ></NavButton>
          }
          {...{ overlayStyle, contentStyle }}
        >
          {(close) => <AboutMeModal close={close} />}
        </Popup>

        <li className="text-neoGrey">
          <NavButton
            hash
            icon={<TbBriefcase size={"1.2rem"} />}
            theme={theme}
            to={"/#Projects"}
          ></NavButton>
        </li>
        <li>
          <Popup
            modal
            nested
            trigger={
              <NavButton
                theme={theme}
                icon={<TbMessageShare size={"1.2rem"} />}
              />
            }
            {...{ overlayStyle, contactContentStyle }}
          >
            {(close) => <ContactMeModal close={close} />}
          </Popup>
        </li>
        {template && (
          <NavButton
            hash
            icon={<FiArrowLeft />}
            theme={theme}
            to={"/#Projects"}
          />
        )}
      </ul>
    </div>
  );
};
export default NavBar;
