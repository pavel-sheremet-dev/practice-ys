import { differenceInHours, differenceInMinutes, format } from "date-fns";
import { uk } from "date-fns/locale";

import TableGrid from "../TableGrid/TableGrid";

import css from "./LogItem.module.css";

export default function LogItem({ item }) {
  const formatedDate = format(new Date(item.date), "E dd.MM", {
    locale: uk,
  });
  const formatedStart = format(item.start, "HH:mm");
  const formateEnd = format(item.end, "HH:mm");
  const hours = differenceInHours(item.end, item.start);
  const minutes = differenceInMinutes(item.end, item.start);

  const total = hours + (minutes - hours * 60) / 60;

  return (
    <TableGrid>
      <div className={css.col}>{formatedDate}</div>
      <div className={css.col}>{item.user}</div>
      <div className={css.col}>{formatedStart}</div>
      <div className={css.col}>{formateEnd}</div>
      <div className={css.col}>{total.toFixed(1)}</div>
    </TableGrid>
  );
}
