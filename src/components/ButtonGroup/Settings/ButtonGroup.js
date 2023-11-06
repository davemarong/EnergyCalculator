"use client";
import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function ButtonGroup() {
  const [alignment, setAlignment] = useState("l/s");
  useEffect(() => {
    const savedMetric = window?.localStorage?.getItem("Liter");
    if (savedMetric?.length) {
      setAlignment(savedMetric);
    }
  }, []);
  const handleAlignment = (event, newAlignment) => {
    if (global?.window !== undefined) {
      // Now it's safe to access window and localStorage
      setAlignment(newAlignment);
      window?.localStorage?.setItem("Liter", newAlignment);
    }
  };
  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
      <ToggleButton value="l/s">l/s - Liter/Sekunder</ToggleButton>
      <ToggleButton value="l/m"> l/m - Liter/Minuttet</ToggleButton>
      <ToggleButton value="l/h">l/h - Liter/Time</ToggleButton>
    </ToggleButtonGroup>
  );
}
