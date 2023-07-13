import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function MainLayout() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
}

export default MainLayout;
