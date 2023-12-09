import React from "react";
import IconButtonSmall from "../../components/buttons/IconButtonSmall";
import { TbX } from "react-icons/tb";

const ImageInteraction = ({ image, description, close }) => {
  return (
    <div className="relative w-screen bg-steel-900 bg-opacity-80 p-20">
      <IconButtonSmall
        onClick={close}
        icon={<TbX />}
        className="absolute right-5 top-5 lg:right-10 lg:top-10"
      />
      <img
        className="mx-auto h-screen w-screen max-w-6xl object-contain"
        src={image}
        alt={description}
      />
    </div>
  );
};
export default ImageInteraction;
