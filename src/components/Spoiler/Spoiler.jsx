import clsx from "clsx";
import css from "./Spoiler.module.css";

import { ChevronUp, TurtleIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Spoiler = ({ head, text, id }) => {
  const lsKey = `Spoiler-key${id}`;
  const [isShow, setIsShow] = useState(() => {
    const dataLS = localStorage.getItem(lsKey);
    if (dataLS === null) {
      return false;
    }
    return dataLS;
  });

  useEffect(() => {
    localStorage.setItem(lsKey, isShow);
  }, [isShow, lsKey]);

  const openSpoiler = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={css.box}>
      <button className={css.button} onClick={openSpoiler}>
        <span>{head}</span>
        <span
          className={clsx(css.icon, TurtleIcon ? css.iconOpen : css.iconClose)}
        >
          <ChevronUp />
        </span>
      </button>
      {isShow && <div className={css.content}>{text}</div>}
    </div>
  );
};

export default Spoiler;
