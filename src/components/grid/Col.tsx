import React from "react";
import { classNames } from "./utils";
import { RowContext } from "./Row";
import "./style.css";

export type ColProps = {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Col: React.FC<ColProps> = ({
  span,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset = 0,
  order = 0,
  pull = 0,
  push = 0,
  className,
  style,
  children,
}) => {
  const { gutter } = React.useContext(RowContext);
  const [horizontalGutter, verticalGutter] = gutter;

  const colStyle: React.CSSProperties = {
    ...(horizontalGutter > 0
      ? {
          paddingLeft: horizontalGutter / 2,
          paddingRight: horizontalGutter / 2,
        }
      : {}),
    ...(verticalGutter > 0
      ? {
          paddingTop: verticalGutter / 2,
          paddingBottom: verticalGutter / 2,
        }
      : {}),
    ...style,
  };

  const classes = classNames(
    "pui-col",
    {
      [`pui-col-${span}`]: span !== undefined,
      [`pui-col-xs-${xs}`]: xs !== undefined,
      [`pui-col-sm-${sm}`]: sm !== undefined,
      [`pui-col-md-${md}`]: md !== undefined,
      [`pui-col-lg-${lg}`]: lg !== undefined,
      [`pui-col-xl-${xl}`]: xl !== undefined,
      [`pui-col-xxl-${xxl}`]: xxl !== undefined,
      [`pui-col-offset-${offset}`]: offset > 0,
      [`pui-col-order-${order}`]: order !== 0,
      [`pui-col-pull-${pull}`]: pull !== 0,
      [`pui-col-push-${push}`]: push !== 0,
    },
    className
  );

  return (
    <div className={classes} style={colStyle}>
      {children}
    </div>
  );
};

export default Col;
