import React from "react";
import classnames from "classnames";

export default function Button({ outline, children, className, ...rest }) {
  const btnClass = classnames(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );
  return (
    <button className={btnClass} {...rest}>
      {String(children ?? "").toUpperCase()}
    </button>
  );
}
