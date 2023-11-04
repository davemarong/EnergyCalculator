import React from "react";
import Nav from "../Nav/Nav";
import { Container } from "@mui/material";
export const GlobalLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <Nav />
        {children}
      </Container>
    </>
  );
};
