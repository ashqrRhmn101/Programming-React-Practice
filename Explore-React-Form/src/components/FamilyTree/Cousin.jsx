import React, { useContext } from "react";
import Special from "./Special";
import { AssetContext } from "./FamilyTree";

const Cousin = ({ name, asset }) => {
  const newAsset = useContext(AssetContext);
  return (
    <div>
      <h3>{name}</h3>
      {name === "jo jo" && <Special asset={asset}></Special>}
      {name === "Tom Tom" && <Special newAsset={newAsset}></Special>}
      {name === "Rafsan" && <Special></Special>}
    </div>
  );
};

export default Cousin;
