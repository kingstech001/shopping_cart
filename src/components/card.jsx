import React from "react";
import Article from "./article";
import Arvata from "./arvata";

const Card = () => {
  return (
    <div className="flex bg-white w-[600px] m-auto rounded-xl">
      <Article />
      <Arvata />
    </div>
  );
};

export default Card;
