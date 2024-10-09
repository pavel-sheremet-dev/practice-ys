import { Info } from "lucide-react";
import clsx from "clsx";

import css from "./IconButton.module.css";
import Button from "../Button/Button";

const IconButton = ({ RLIcon = Info, className, ...rest }) => {
  return (
    <Button className={clsx(css.icon_button, className)} {...rest}>
      <RLIcon strokeWidth={1} size={24} />
    </Button>
  );
};

export default IconButton;
