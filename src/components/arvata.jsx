import React from "react";
import catImage from "../assets/cat_image.jpeg";
import NextPrevBtn from "./nextPrevBtn";

const Arvata = () => {
  return (
    <div className="p-10 w-[300px] flex flex-col items-center justify-center" >
      <img src={catImage} alt="Cat image"  className="w-[100%]"/>
      <NextPrevBtn />
    </div>
  );
};

export default Arvata;
