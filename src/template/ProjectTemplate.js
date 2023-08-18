import React from 'react';
import Layout from '../components/layout';
import CtaButton from '../Header/components/subcomponents/buttons/CtaButton';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import useGetSlugContent from '../hooks/useGetSlugContent';

const ProjectTemplate = () => {
  const { slug } = useParams();
  const { data } = useGetSlugContent({ slug });

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <div>
        <Link to="/">
          <button className="absolute top-26 right-36">
            <CtaButton icon={<FiArrowLeft />} text={'Go Back'} />
          </button>
        </Link>
        <p className="text-[4.2rem] text-pWhite">{data[0].title}</p>
        <p className="text-pText">{data[0].openingText}</p>
        {data[0].contentImageCollection.items.map((item, index) => (
          <p key={index}>{item.url}</p>
        ))}
        <p className="text-pText">{data[0].conclusion}</p>
      </div>
    </Layout>
  );
};
export default ProjectTemplate;
