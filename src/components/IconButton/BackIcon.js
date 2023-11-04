import React from "react";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
export default function BackIcon() {
  const router = useRouter();

  return (
    <div>
      <IconButton onClick={router.back}>
        <ArrowBackRoundedIcon />
      </IconButton>
    </div>
  );
}
