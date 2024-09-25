import clsx from "clsx";
import css from "./TableGrid.module.css";

const TableGrid = ({ children, className }) => {
  return <div className={clsx(css.grid, className)}>{children}</div>;
};

export default TableGrid;
