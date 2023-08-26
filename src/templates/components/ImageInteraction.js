import React from "react";
import IconButtonSmall from "../../components/buttons/IconButtonSmall";
import { TbX } from "react-icons/tb";

const ImageInteraction = ({ image, description, close }) => {
  return (
    <div className="relative">
      <IconButtonSmall
        onClick={close}
        icon={<TbX />}
        className="absolute right-10 top-10"
      />
      <img className="h-screen" src={image} alt={description} />
    </div>
  );
};
export default ImageInteraction;
