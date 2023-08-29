import classNames from "classnames";
import React, { useContext } from "react";

import ReactMarkdown from "react-markdown";
import ThemeContext from "../../../context/ThemeContext";

const PersonalContent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme === "dark" ? "text-steel-300" : "text-steel-700",
        "space-y-6 text-sm",
      )}
    >
      <div className="blockquote2 mx-6 flex w-full font-bold">
        <span className="">{`"Infinite diversity in infinite combination."`}</span>
      </div>

      <ReactMarkdown className="leading-7">
        Welcome to my world where science fiction is more than just a genre –
        it's a lifelong fascination. Star Trek has been my loyal companion,
        sparking my imagination since childhood. When I'm not immersed in design
        or coding, you might find me cycling through scenic routes or lifting
        weights to channel my energy.
      </ReactMarkdown>
      <ReactMarkdown className="leading-7">
        Embracing my inner technophile, I constantly keep tabs on cutting-edge
        gadgets and advancements in aerospace, infrastructure and the latest in
        home automation. Innovation drives me, and I'm always excited to see how
        technology reshapes our world. Whether I'm crafting captivating designs
        or exploring new galaxies in science fiction, my journey is marked by
        curiosity, creativity, and an desire to keep learning.
      </ReactMarkdown>
    </div>
  );
};
export default PersonalContent;
