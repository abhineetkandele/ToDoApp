import React from "react";
import Button from "../header/button";

export default function ListItem({
  text,
  status,
  identifier,
  clickHandler,
  button
}) {
  return (
    <li
      style={status ? {} : { textDecoration: "line-through" }}
      onClick={() => clickHandler(identifier)}
    >
      {text}
      <Button
        {...button}
        onClick={(e) => {
          e.stopPropagation();
          button.onClick(identifier);
        }}
      />
    </li>
  );
}
