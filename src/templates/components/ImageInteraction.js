import React from "react";
import IconButtonSmall from "../../components/buttons/IconButtonSmall";
import { TbX } from "react-icons/tb";

const ImageInteraction = ({ image, description, close }) => {
  return (
    <div className="relative bg-steel-800 bg-opacity-50">
      <IconButtonSmall
        onClick={close}
        icon={<TbX />}
        className="absolute right-5 top-5 lg:right-10 lg:top-10"
      />
      <img
        className="h-screen w-screen object-contain"
        src={image}
        alt={description}
      />
    </div>
  );
};
export default ImageInteraction;
