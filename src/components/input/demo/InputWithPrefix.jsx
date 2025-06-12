import React from "react";
import Input from "../Input";

const InputWithPrefix = () => {
  return (
    <div className="demo-container">
      <h2>Input với Prefix và Suffix</h2>
      <div className="demo-row">
        <Input prefix="👤" placeholder="Nhập tên người dùng" />
      </div>
      <div className="demo-row">
        <Input suffix="🔍" placeholder="Tìm kiếm" />
      </div>
      <div className="demo-row">
        <Input prefix="📧" suffix="@gmail.com" placeholder="username" />
      </div>
    </div>
  );
};

export default InputWithPrefix;
