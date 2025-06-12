import React, { useState } from "react";
import "./style/Input.css";

const Input = ({
  className = "",
  size = "default",
  type = "text",
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
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(e);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.({ target: { value: "" } });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onPressEnter?.(e);
    }
  };

  const inputClassName = `
    pui-input not-override
    pui-input-${size}
    ${prefix ? "pui-input-has-prefix" : ""}
    ${suffix ? "pui-input-has-suffix" : ""}
    ${disabled ? "pui-input-disabled" : ""}
    ${isFocused ? "pui-input-focused" : ""}
    ${className}
  `.trim();

  return (
    <div className={`pui-input-wrapper not-override ${inputClassName}`}>
      {prefix && (
        <span className="pui-input-prefix not-override">{prefix}</span>
      )}
      <input
        type={type}
        value={value !== undefined ? value : inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="pui-input not-override"
        {...props}
      />
      {allowClear && inputValue && (
        <span className="pui-input-clear not-override" onClick={handleClear}>
          ✕
        </span>
      )}
      {suffix && (
        <span className="pui-input-suffix not-override">{suffix}</span>
      )}
    </div>
  );
};

export default Input;
