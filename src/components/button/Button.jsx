import React from "react";
import "./style/Button.css";

const Button = ({
  children,
  type = "default",
  size = "middle",
  shape = "default",
  danger = false,
  disabled = false,
  loading = false,
  block = false,
  icon,
  className = "",
  onClick,
  ...props
}) => {
  const buttonClassName = `
    pui-btn
    pui-btn-${type}
    pui-btn-${size}
    ${shape !== "default" ? `pui-btn-${shape}` : ""}
    ${danger ? "pui-btn-dangerous" : ""}
    ${disabled ? "pui-btn-disabled" : ""}
    ${loading ? "pui-btn-loading" : ""}
    ${block ? "pui-btn-block" : ""}
    ${className}
  `.trim();

  const handleClick = (e) => {
    if (disabled || loading) {
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      className={buttonClassName}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && <span className="pui-btn-loading-icon">⌛</span>}
      {icon && !loading && <span className="pui-btn-icon">{icon}</span>}
      <span className="pui-btn-content">{children}</span>
    </button>
  );
};

export default Button;
