import React from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

const FamilyTree = () => {
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <Grandpa />
    </div>
  );
};

export default FamilyTree;
