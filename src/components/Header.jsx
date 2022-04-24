import React from "react";
import Nav from "./Nav";

export default function Header({ cart }) {
  return (
    <header>
      <Nav cart={cart} />
    </header>
  );
}
