import React from 'react';
import CtaButton from '../components/buttons/CtaButton';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const FourZeroFour = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-pDark px-56">
      <div className="text-center flex flex-col pt-36">
        <p className="gradient-text text-[7.5rem] w-1/4 mx-auto font-semibold">
          404
        </p>
        <p className="text-pText w-1/2 mx-auto">
          The page you are looking for is not here.... hmmm.... best bet is to
          just go back to the home page.{' '}
        </p>
        <div className="flex justify-center pt-10">
          <button onClick={() => navigate(-1)}>
            <CtaButton icon={<FiArrowLeft />} text={'Go Back'} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default FourZeroFour;
