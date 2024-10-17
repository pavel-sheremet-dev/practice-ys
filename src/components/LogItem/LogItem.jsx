import { Pencil, Trash } from "lucide-react";

import { differenceInHours, differenceInMinutes, format } from "date-fns";
import { uk } from "date-fns/locale";

import TableGrid from "../TableGrid/TableGrid";

import css from "./LogItem.module.css";
import IconButton from "../IconButton/IconButton";

export default function LogItem({ item, deleteLogItem }) {
  const formatedDate = format(new Date(item.date), "E dd.MM", {
    locale: uk,
  });
  const formatedStart = format(item.start, "HH:mm");
  const formateEnd = format(item.end, "HH:mm");
  const hours = differenceInHours(item.end, item.start);
  const minutes = differenceInMinutes(item.end, item.start, {
    roundingMethod: "ceil",
  });

  const total = hours + (minutes - hours * 60) / 60;

  return (
    <TableGrid>
      <div className={css.col}>{formatedDate}</div>
      <div className={css.col}>{item.username}</div>
      <div className={css.col}>{formatedStart}</div>
      <div className={css.col}>{formateEnd}</div>
      <div className={css.col}>{total.toFixed(2)}</div>
      <div className={css.col}>
        <div className={css.controls}>
          <IconButton RLIcon={Pencil} />
          <IconButton
            RLIcon={Trash}
            onClick={() => {
              deleteLogItem(item.id);
            }}
          />
        </div>
      </div>
    </TableGrid>
  );
}
