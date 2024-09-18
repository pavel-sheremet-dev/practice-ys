import LogItem from "../LogItem/LogItem";

export default function LogList({ logData }) {
  return (
    <ul>
      {logData.map((item) => {
        return (
          <li key={item.id}>
            <LogItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
