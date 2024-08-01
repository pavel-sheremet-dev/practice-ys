import clsx from "clsx";
import css from "./Spoiler.module.css";

import { ChevronUp } from "lucide-react";

const Spoiler = ({ head, text }) => {
  // використати useState, для управління відкриттям/закриттям спойлеру (булєве значення)

  return (
    <div className={css.box}>
      <button className={css.button}>
        <span>{head}</span>
        <span className={clsx(css.icon, false ? css.iconOpen : css.iconClose)}>
          <ChevronUp />
        </span>
      </button>
      {false && <div className={css.content}>{text}</div>}
    </div>
  );
};

export default Spoiler;
