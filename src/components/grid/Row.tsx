import React from "react";
import { classNames } from "./utils";
import "./style.css";

export type RowProps = {
  gutter?: number | [number, number];
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  align?: "top" | "middle" | "bottom";
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Row = ({
  gutter = 0,
  justify = "start",
  align = "top",
  wrap = true,
  className,
  style,
  children,
}: RowProps) => {
  const [horizontalGutter, verticalGutter] = Array.isArray(gutter)
    ? gutter
    : [gutter, 0];

  const rowStyle: React.CSSProperties = {
    ...(horizontalGutter > 0
      ? {
          marginLeft: horizontalGutter / -2,
          marginRight: horizontalGutter / -2,
        }
      : {}),
    ...(verticalGutter > 0
      ? {
          marginTop: verticalGutter / -2,
          marginBottom: verticalGutter / -2,
        }
      : {}),
    ...style,
  };

  const classes = classNames(
    "pui-row",
    {
      [`pui-row-justify-${justify}`]: justify,
      [`pui-row-align-${align}`]: align,
      "pui-row-nowrap": !wrap,
    },
    className
  );

  const rowContext = React.useMemo(
    () => ({
      gutter: [horizontalGutter, verticalGutter] as [number, number],
    }),
    [horizontalGutter, verticalGutter]
  );

  return (
    <RowContext.Provider value={rowContext}>
      <div className={classes} style={rowStyle}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

export const RowContext = React.createContext<{
  gutter: [number, number];
}>({
  gutter: [0, 0],
});

export default Row;
