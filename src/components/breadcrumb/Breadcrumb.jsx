import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import "./style.css";

const Breadcrumb = ({ items, separator = "/", className = "", style = {} }) => {
  return (
    <nav
      className={`pui-breadcrumb ${className}`}
      style={style}
      aria-label="breadcrumb"
    >
      <ol className="pui-breadcrumb-list">
        {items?.map((item, index) => {
          if (item.type === "separator") {
            return (
              <li key={index} className="pui-breadcrumb-separator-item">
                {item.separator || separator}
              </li>
            );
          }
          return (
            <BreadcrumbItem
              key={item.key || index}
              {...item}
              separator={separator}
              isLast={index === items.length - 1}
            />
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
