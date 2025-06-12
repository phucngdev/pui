import React, { useState } from "react";
import Input from "./Input";

const Password = ({
  className = "",
  size = "default",
  placeholder,
  prefix,
  suffix,
  disabled = false,
  allowClear = false,
  value,
  defaultValue,
  onChange,
  onPressEnter,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const passwordSuffix = (
    <span className="pui-input-password-toggle" onClick={toggleVisibility}>
      {visible ? "👁️" : "👁️‍🗨️"}
    </span>
  );

  return (
    <Input
      type={visible ? "text" : "password"}
      className={className}
      size={size}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix || passwordSuffix}
      disabled={disabled}
      allowClear={allowClear}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onPressEnter={onPressEnter}
      {...props}
    />
  );
};

export default Password;
