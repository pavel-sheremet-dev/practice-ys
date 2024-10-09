import clsx from "clsx";

import css from "./Button.module.css";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      className,
      onClick = () => {
        console.warn("pass onClick function to Button component");
      },
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={clsx(className, css.button)}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
