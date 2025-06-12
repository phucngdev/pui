import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const Breadcrumb = ({
  items = [],
  style,
  className,
  params,
  icon,
  hrefIcon,
  separator,
}) => {
  return (
    <>
      <div
        style={style}
        className="flex items-center gap-[15px] text-[rgba(0, 0, 0, 0.45)]"
      >
        {icon && (
          <Link
            to={hrefIcon}
            className="p-1 rounded-md hover:text-black hover:bg-white hover:bg-opacity-20"
          >
            {icon ?? (
              <HomeOutlined
                size={20}
                // className="text-[rgba(102, 112, 133, 1)]"
              />
            )}
          </Link>
        )}
        {items.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {separator || "/"}
            <Link
              to={breadcrumb.href}
              className="p-1 rounded-md hover:text-black"
            >
              {breadcrumb.title}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
