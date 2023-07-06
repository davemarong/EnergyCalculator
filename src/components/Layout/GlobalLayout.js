import React from "react";
import Nav from "../Nav/Nav";

export const GlobalLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
