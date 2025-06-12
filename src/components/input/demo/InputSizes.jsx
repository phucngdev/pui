import React from "react";
import Input from "../Input";

const InputSizes = () => {
  return (
    <div className="demo-container">
      <h2>Input với các Kích Thước</h2>
      <div className="demo-row">
        <Input size="large" placeholder="Large size" />
      </div>
      <div className="demo-row">
        <Input placeholder="Default size" />
      </div>
      <div className="demo-row">
        <Input size="small" placeholder="Small size" />
      </div>
    </div>
  );
};

export default InputSizes;
