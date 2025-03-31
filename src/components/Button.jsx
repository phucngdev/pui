import React from "react";

const buttonStyles = {
  primary: {
    default:
      "bg-[#1677ff] hover:bg-[#4096ff] text-white border-[2px] border-[#1677ff]",
    danger:
      "bg-[#ff4d4f] hover:bg-[#ff7875] text-white border-[2px] border-[#ff4d4f]",
  },
  default: {
    default: "bg-transparent text-black border-[2px] border-[#d9d9d9]",
    danger: "bg-transparent text-[#ff4d4f] border-[2px] border-[#ff4d4f]",
  },
  dashed: {
    default:
      "bg-transparent text-[#1677ff] border-[2px] border-[#1677ff] border-dashed",
    danger:
      "bg-transparent text-[#ff4d4f] border-[2px] border-[#ff4d4f] border-dashed",
  },
};

const buttonSizes = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const Button = ({
  children,
  onClick,
  danger = false,
  disabled = false,
  loading = false,
  className = "",
  type = "default",
  icon,
  size = "medium",
}) => {
  const sizeClasses = buttonSizes[size] || buttonSizes.medium;
  const baseClasses =
    "px-4 py-1 rounded-md font-medium transition-all flex items-center justify-center gap-2";
  const typeClasses = buttonStyles[type]?.[danger ? "danger" : "default"] || "";

  return (
    <button
      className={`${baseClasses}  ${sizeClasses} ${typeClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? (
        <span className="animate-spin border-2 border-t-transparent rounded-full w-4 h-4"></span>
      ) : (
        icon && <span className="size-6">{icon}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
