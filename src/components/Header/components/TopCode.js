import React from "react";

const TopCode = () => {
  return (
    <div className=" flex h-32 translate-x-5 flex-col place-content-center opacity-40">
      <p className="text-xs tracking-normal text-green-300">
        {"const myPortfolio => ({children: React.ReactElement}) = {"}
      </p>
      <p className="ml-8 text-xs tracking-normal text-green-300">
        <span className="ml-0">{"const myPortfolio => () = {"}</span>
        {"const { a: name , b: age } : { a: string , b: number } = {Paul , 35}"}
        <br></br>
        {"const [scrollPosition, setScrollPosition] = useState(0)"}
        <br></br>
        <br></br>
        {"const handleScroll = () => {"}
        <br></br>
        {"const position = window.scrollY;"}
        {"setScrollPosition(position);"}
        {"};}"}
      </p>
    </div>
  );
};
export default TopCode;
