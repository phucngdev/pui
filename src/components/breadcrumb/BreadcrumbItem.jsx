import React from "react";

/**
 * @typedef {Object} BreadcrumbItemProps
 * @property {React.ReactNode} title - Nội dung của breadcrumb item
 * @property {string} [href] - URL của link
 * @property {React.ReactNode} [separator] - Dấu phân cách
 * @property {boolean} [isLast] - Xác định có phải item cuối cùng
 * @property {string} [className=''] - Class CSS bổ sung
 * @property {Object} [style={}] - Style CSS bổ sung
 */

/**
 * Component BreadcrumbItem đại diện cho một item trong breadcrumb
 * @param {BreadcrumbItemProps} props
 */
const BreadcrumbItem = ({
  title,
  href,
  separator,
  isLast,
  className = "",
  style = {},
}) => {
  const content = <span className="pui-breadcrumb-item-title">{title}</span>;

  const item = (
    <div
      className={`pui-breadcrumb-item ${
        isLast ? "pui-breadcrumb-item-last" : ""
      } ${href ? "pui-breadcrumb-link" : ""}`}
      style={{ cursor: href ? "pointer" : "default", ...style }}
    >
      {content}
    </div>
  );

  return (
    <li className={`pui-breadcrumb-item ${className}`}>
      {item}
      {!isLast && <span className="pui-breadcrumb-separator">{separator}</span>}
    </li>
  );
};

export default BreadcrumbItem;
