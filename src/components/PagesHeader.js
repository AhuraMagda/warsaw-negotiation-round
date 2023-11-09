import React from "react";

export default function PagesHeader({ children }) {
  return (
    <header className="pages-header">
      <h1>{children}</h1>
    </header>
  );
}