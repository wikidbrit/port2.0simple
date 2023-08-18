import React from 'react';
import Layout from '../components/layout';
import CtaButton from '../Header/components/subcomponents/buttons/CtaButton';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectTemplate = ({
  title,
  openingText,
  contentImageCollection,
  conclusion,
}) => {
  return (
    <Layout>
      <div>
        <Link to="/">
          <button className="absolute top-26 right-36">
            <CtaButton icon={<FiArrowLeft />} text={'Go Back'} />
          </button>
        </Link>
        <p className="text-[4.2rem] text-pWhite">
          {title ? title : 'Title goes here'}
        </p>
        <p className="text-pText">
          {openingText ? openingText : 'Opening text goes here'}
        </p>
        <p className="">
          {contentImageCollection
            ? contentImageCollection
            : 'Series of images are going to render here'}
        </p>
        <p className="text-pText">
          {conclusion ? conclusion : 'Conclusion text goes here'}
        </p>
      </div>
    </Layout>
  );
};
export default ProjectTemplate;
