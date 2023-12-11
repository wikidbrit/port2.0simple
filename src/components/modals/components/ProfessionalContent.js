import classNames from "classnames";
import React, { useContext } from "react";

import ReactMarkdown from "react-markdown";
import ThemeContext from "../../../context/ThemeContext";

const ProfessionalContent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme === "dark" ? "text-steel-300" : "text-steel-700",
        "space-y-6",
      )}
    >
      <div className="blockquote mx-6 flex w-full font-bold">
        <span className="">Gradatim Ferociter!</span>
      </div>
      <ReactMarkdown className="leading-7">
        I'm an experienced and versatile designer with a strong foundation in
        both digital and print applications. With a deep understanding of the
        **Adobe Creative Suite** and **Figma**, I craft visually captivating
        experiences that leave a lasting impact. My journey has encompassed
        various facets of design, from **brand development** and **UX / UI
        design** to the meticulous creation of **design systems**.
      </ReactMarkdown>
      <ReactMarkdown className="leading-7">
        Front end development is my latest frontier. I specialize in JavaScript,
        particularly within the **React** framework, and have honed my skills in
        creating dynamic user interfaces. My proficiency extends to static site
        generation using **Gatsby**, **CMS** management, and harnessing the
        power of **GraphQL** for seamless data integration. I pride myself on my
        command over **HTML** and **CSS**, working towards designs to not only
        dazzle but function flawlessly across devices.
      </ReactMarkdown>
    </div>
  );
};
export default ProfessionalContent;
