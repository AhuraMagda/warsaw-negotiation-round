import React from "react";

function ComponentHeader({ children }) {
  return (
    <header className="component-header">
      <h1>{children}</h1>
    </header>
  );
}

export default ComponentHeader;
