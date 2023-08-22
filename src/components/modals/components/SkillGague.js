import React from 'react';

const SkillGague = ({ icon, percent }) => {
  return (
    <div className="rounded-full h-full w-full raised p-4">
      <div className="inset rounded-full flex items-center">
        <div className="raised rounded-full w-48 h-48"></div>
      </div>
    </div>
  );
};
export default SkillGague;
