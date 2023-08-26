import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { PaulLogoDark, PaulLogoLight } from "../../assets/svgs";
import classNames from "classnames";
import {
  TbPhone,
  TbMessage2Share,
  TbMapPin,
  TbChecklist,
  TbUserShare,
  TbMessageShare,
} from "react-icons/tb";
import AlternatingToggle from "../buttons/AlternatingToggle";
import IconButtonSmall from "../buttons/IconButtonSmall";
import Popup from "reactjs-popup";
import SkillsModal from "../modals/SkillsModal";
import AboutMeModal from "../modals/AboutMeModal";
import ContactMeModal from "../modals/ContactMeModal";

const Footer = ({ handleChange }) => {
  const theme = useContext(ThemeContext);

  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  const contentStyle = {
    background: "#2EB2EC",
    borderRadius: "2rem",
  };

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
          <ul className="space-y-4">
            <li className="flex flex-row items-center space-x-2">
              <div className=" text-lightWater">
                <TbMessage2Share size={"1.2rem"} />
              </div>

              <a
                href="mailto:pflemingonline@gmail.com?Subject=Contacting from pafleming.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                pflemingonline@gmail.com
              </a>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <div className=" text-lightWater">
                <TbPhone size={"1.2rem"} />
              </div>
              <p>073 953 94 69</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <div className=" text-lightWater">
                <TbMapPin size={"1.2rem"} />
              </div>
              <p>Stockholm, Sweden</p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={classNames(
          theme === "dark" ? "text-steel-100" : "text-water-900",
          "flex h-full flex-col place-content-between text-sm",
        )}
      >
        <div className="flex flex-row space-x-2">
          <Popup
            modal
            nested
            trigger={<IconButtonSmall icon={<TbUserShare size={"1.2rem"} />} />}
            {...{ overlayStyle, contentStyle }}
          >
            {(close) => <AboutMeModal close={close} />}
          </Popup>
          <Popup
            modal
            nested
            trigger={
              <IconButtonSmall icon={<TbMessageShare size={"1.2rem"} />} />
            }
            {...{ overlayStyle, contentStyle }}
          >
            {(close) => <ContactMeModal close={close} />}
          </Popup>
          <Popup
            modal
            nested
            trigger={<IconButtonSmall icon={<TbChecklist size={"1.2rem"} />} />}
            {...{ overlayStyle, contentStyle }}
          >
            {(close) => <SkillsModal close={close} />}
          </Popup>
        </div>
        <div className="align-bottom">© Paul Fleming 2023</div>
      </div>
    </div>
  );
};
export default Footer;
