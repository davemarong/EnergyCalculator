import Link from "next/link";
import { useState } from "react";
import { allMeny_item } from "../Data/Items/Items";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Home({ setCategory, user }) {
  console.log(user);
  return (
    <>
      {user && <Typography>Hei, {user.email}</Typography>}
      <Grid container direction="column">
        {allMeny_item.map((item) => {
          return (
            <Link key={item.id} href={`/${item.title}`}>
              <Button
                variant="contained"
                onClick={() => {
                  setCategory(item.menyItems);
                }}
              >
                {item.title}
              </Button>
            </Link>
          );
        })}
      </Grid>
    </>
  );
}
