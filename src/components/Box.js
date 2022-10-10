import React from "react";

export default function Box({ children }) {
  return (
    <>
      <div
        className="
        flex flex-col
        border-2 border-black rounded p-2 m-2"
      >
        {children}
      </div>
    </>
  );
}
