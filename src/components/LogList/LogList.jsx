import LogItem from "../LogItem/LogItem";
import TableGrid from "../TableGrid/TableGrid";

import css from "./LogList.module.css";

export default function LogList({ logData }) {
  return (
    <div className={css.table}>
      <TableGrid className={css.head}>
        {["Дата", "ПІБ", "Початок", "Кінець", "Години"].map((name) => (
          <div className={css.col} key={name}>
            {name}
          </div>
        ))}
      </TableGrid>
      <ul>
        {logData.map((item) => {
          return (
            <li key={item.id} className={css.row}>
              <LogItem item={item} />
            </li>
          );
        })}
      </ul>
      <TableGrid>
        {["", "", "", "Загалом", ""].map((name) => (
          <div className={css.col} key={name}>
            {name}
          </div>
        ))}
      </TableGrid>
    </div>
  );
}
