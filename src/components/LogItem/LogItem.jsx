import { differenceInHours, format } from "date-fns";

export default function LogItem({ item }) {
  const formatedDate = format(new Date(item.date), "PPP");
  const formatedStart = format(item.start, "p");
  const formateEnd = format(item.end, "p");
  const total = differenceInHours(item.end, item.start);
  return (
    <div>
      <div>{formatedDate}</div>
      <div>{item.user}</div>
      <div>{formatedStart}</div>
      <div>{formateEnd}</div>
      <div>{total}</div>
    </div>
  );
}
