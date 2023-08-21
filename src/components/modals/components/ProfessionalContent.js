import React from 'react';

import ReactMarkdown from 'react-markdown';

const ProfessionalContent = () => {
  return (
    <div className="space-y-6">
      <div className="mx-6 blockquote flex w-full font-bold">
        <span className="">Gradatim Ferociter!</span>
      </div>
      <ReactMarkdown className="leading-7">
        I'm a passionate and versatile designer with a strong foundation in both
        digital and print applications. With a deep understanding of the **Adobe
        Creative Suite** and **Figma**, I craft visually captivating experiences
        that leave a lasting impact. My journey has encompassed various facets
        of design, from **brand development** and **UX / UI design** to the
        meticulous creation of **design systems**.
      </ReactMarkdown>
      <ReactMarkdown className="leading-7">
        My expertise extends to collaborating closely with stakeholders,
        confidently presenting design strategies and solutions. I tackle
        projects ranging from pixel-perfect print layouts to interactive digital
        interfaces. I'm well-versed in creating accessible and responsive
        designs while ensuring accessibility in every experience.
      </ReactMarkdown>
      <ReactMarkdown className="leading-7">
        Coding is another realm where I thrive. I specialize in JavaScript,
        particularly within the **React** framework, and have honed my skills in
        crafting dynamic user interfaces. My proficiency extends to static site
        generation using **Gatsby**, **CMS** management, and harnessing the
        power of **GraphQL** for seamless data integration. I pride myself on my
        command over **HTML** and **CSS**, working towards designs to not only
        dazzle but function flawlessly across devices.
      </ReactMarkdown>
      <ReactMarkdown className="leading-7">---</ReactMarkdown>
    </div>
  );
};
export default ProfessionalContent;
