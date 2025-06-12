import React from "react";
import Input from "../Input";

const BasicInput = () => {
  const handleChange = (e) => {
    console.log("Giá trị input:", e.target.value);
  };

  return (
    <div className="demo-container">
      <h2>Input Cơ Bản</h2>
      <div className="demo-row">
        <Input placeholder="Nhập text" onChange={handleChange} />
      </div>
    </div>
  );
};

export default BasicInput;
