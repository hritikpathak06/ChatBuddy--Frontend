import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";
import Title from "../shared/Title";

const AppLayout = ({ children }) => {
  return (
    <>
      <Title />
      <Header />
      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
          bgcolor={"primary.main"}
        >
          First
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={6}
          height={"100%"}
          bgcolor={"primary.main"}
        >
          {children}
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          height={"100%"}
          bgcolor="rgba(0,0,0,0.85)"
          sx={{
            display: {
              sx: "none",
              md: "block",
              padding: "2rem",
            },
          }}
        >
          Third
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
