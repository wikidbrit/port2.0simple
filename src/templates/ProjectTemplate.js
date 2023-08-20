import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useGetSlugContent from '../hooks/useGetSlugContent';

import CtaButton from '../components/buttons/CtaButton';
import { FiArrowLeft } from 'react-icons/fi';

const ProjectTemplate = () => {
  const { slug } = useParams();
  const { data } = useGetSlugContent({ slug });

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Link to="/">
        <button className="fixed left-20 mt-7">
          <CtaButton icon={<FiArrowLeft />} text={'Go Back'} />
        </button>
      </Link>
      <p className="text-[4.2rem] text-pWhite">{data[0].title}</p>
      <p className="text-pText">{data[0].openingText}</p>
      {data[0].contentImageCollection.items.map((item, index) => (
        <img key={index} alt="test" src={item.url}></img>
      ))}
      <p className="text-pText">{data[0].conclusion}</p>
    </div>
  );
};
export default ProjectTemplate;
