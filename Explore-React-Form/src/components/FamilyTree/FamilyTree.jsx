import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext("");

const FamilyTree = () => {
  const [money, setMoney] = useState(0)
  const asset = "gold";
  const newAsset = "diamond";

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h2>Total Family Money: {money}</h2>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
        <Grandpa asset={asset} />
      </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
