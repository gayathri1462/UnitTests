import React from "react";

export default function Header({ title }) {
  return (
    <>
      <h1 title="Header" className="header" data-testid="header-1">
        {title}
      </h1>
    </>
  );
}
