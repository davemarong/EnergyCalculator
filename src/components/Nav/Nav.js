import React, { useEffect, useState } from "react";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Nav = ({ isLogged }) => {
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    if (isLogged) {
      console.log({ isLogged });
      setNavItems(navItemsAuth);
    } else {
      setNavItems(navItemsPublic);
    }
  }, [isLogged]);
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item justifyContent="center" alignItems="center" xs={6}>
        <Typography variant="h6">Energy Calculator</Typography>
      </Grid>
      <Grid item justifyContent="end">
        {navItems.map((item) => {
          return (
            <Link key={item.path} href={item.path}>
              <Button
                variant="outlined"
                style={{ backgroundColor: item.color, margin: "20px 10px" }}
                key={item.label}
                onClick={() => {}}
              >
                {item.label}
              </Button>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default Nav;
