import React from "react";
import Input from "../Input";

const PasswordInput = () => {
  return (
    <div className="demo-container">
      <h2>Password Input</h2>
      <div className="demo-row">
        <Input.Password placeholder="Nhập mật khẩu" allowClear />
      </div>
      <div className="demo-row">
        <Input.Password placeholder="Mật khẩu bị vô hiệu hóa" disabled />
      </div>
    </div>
  );
};

export default PasswordInput;
