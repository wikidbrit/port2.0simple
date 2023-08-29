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
  TbBrandLinkedin,
  TbFileLike,
  TbBrandGithub,
  TbMail,
} from "react-icons/tb";
import AlternatingToggle from "../buttons/AlternatingToggle";
import IconButtonSmall from "../buttons/IconButtonSmall";
import Popup from "reactjs-popup";
import SkillsModal from "../modals/SkillsModal";
import AboutMeModal from "../modals/AboutMeModal";
import ContactMeModal from "../modals/ContactMeModal";
import useGetBreakpoints from "../../hooks/useGetBreakpoints";

const Footer = ({ handleChange }) => {
  const theme = useContext(ThemeContext);
  const { isDesktop, isMobile } = useGetBreakpoints();

  const contentStyle = {
    background: "#2EB2EC",
  };

  console.log(isDesktop);

  return (
    <div className="flex h-56 flex-row justify-between p-2 lg:h-48 lg:p-0">
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
        {isDesktop && <AlternatingToggle handleChange={handleChange} />}

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
        <div className="block align-bottom text-steel-600 lg:hidden lg:self-end">
          © Paul Fleming 2023
        </div>
      </div>

      <div
        className={classNames(
          theme === "dark" ? "text-steel-100" : "text-water-900",
          "flex h-full flex-col place-content-between text-sm",
        )}
      >
        {isDesktop && (
          <div className="flex hidden flex-row space-x-2 lg:block">
            <Popup
              modal
              nested
              trigger={
                <IconButtonSmall
                  icon={<TbUserShare color="#D6D6D6" size={"1.2rem"} />}
                />
              }
              {...{ contentStyle }}
            >
              {(close) => <AboutMeModal close={close} />}
            </Popup>
            <Popup
              modal
              nested
              lockScroll
              trigger={
                <IconButtonSmall
                  icon={<TbMail color="#D6D6D6" size={"1.2rem"} />}
                />
              }
              {...{ contentStyle }}
            >
              {(close) => <ContactMeModal close={close} />}
            </Popup>
            <Popup
              modal
              nested
              trigger={
                <IconButtonSmall
                  icon={<TbChecklist color="#D6D6D6" size={"1.2rem"} />}
                />
              }
              {...{ contentStyle }}
            >
              {(close) => <SkillsModal close={close} />}
            </Popup>

            <IconButtonSmall
              icon={<TbFileLike color="#D6D6D6" size={"1.2rem"} />}
            />
            <a
              target="blank"
              rel="noreferrer"
              href="https://github.com/wikidbrit"
            >
              <IconButtonSmall
                icon={<TbBrandGithub color="#D6D6D6" size={"1.2rem"} />}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pflemingonline/"
              target="blank"
              rel="noreferrer"
            >
              <IconButtonSmall
                icon={<TbBrandLinkedin color="#D6D6D6" size={"1.3rem"} />}
              />
            </a>
          </div>
        )}

        {isDesktop && (
          <div className="hidden self-end align-bottom text-steel-600 lg:block">
            © Paul Fleming 2023
          </div>
        )}
      </div>
    </div>
  );
};
export default Footer;
