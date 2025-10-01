import React, { use, useContext } from "react";
import { AssetContext, MoneyContext } from "./FamilyTree";

const Special = ({ asset }) => {
  const newAsset = useContext(AssetContext);
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h3>Special</h3>
      <p>Asset : {asset}</p>
      <p>Asset : {newAsset}</p>
      <button onClick={() => setMoney(money + 20000)}>Add Money</button>
      <p>{money}</p>
    </div>
  );
};

export default Special;
