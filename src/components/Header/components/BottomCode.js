import React from "react";

const BottomCode = () => {
  return (
    <div className=" flex h-32 translate-x-5 flex-col place-content-center opacity-40">
      <p className="text-xs tracking-normal text-green-300">
        {"useEffect(() => {"}
      </p>
      <p className="ml-8 text-xs tracking-normal text-green-300">
        <span className="ml-0">
          {
            " window.addEventListener('scroll', handleScroll, { passive: true });"
          }
        </span>
        <br></br>
        {"return () => {"}
        <br></br>
        {"window.removeEventListener('scroll', handleScroll);"}
        <br></br>

        <br></br>
        {"};"}
        {"}, []);"}
      </p>
    </div>
  );
};
export default BottomCode;
