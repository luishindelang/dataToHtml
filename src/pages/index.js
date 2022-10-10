import React, { startTransition } from "react";
import Content from "../components/Content";

export default function index() {
  const obj = {
    a: "1",
    b: "2",
    c: {
      a: "1",
      b: { a: { a: "1", b: "2", c: "3" }, b: "1", c: "2" },
      c: "2",
      d: { a: "1", b: { a: "1" } },
    },
  };

  return (
    <>
      <div>
        <Content obj={obj} />
      </div>
    </>
  );
}
