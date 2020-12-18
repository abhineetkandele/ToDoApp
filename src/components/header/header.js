import React from "react";
import Button from "./button";
import TextBox from "./text-box";

export default function Header({ textBox, button }) {
  return (
    <>
      <TextBox {...textBox} />
      <Button {...button} />
    </>
  );
}
