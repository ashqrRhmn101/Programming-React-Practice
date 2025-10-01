import React from "react";
import Cousin from "./Cousin";

const Aunt = ({asset}) => {
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin name="Tom Tom" />
        <Cousin asset={asset} name="jo jo" />
      </section>
    </div>
  );
};

export default Aunt;
