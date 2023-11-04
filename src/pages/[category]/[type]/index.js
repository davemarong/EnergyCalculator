import BackIcon from "@/components/IconButton/BackIcon";
import { PipeCalculator } from "@/components/PipeCalculator/PipeCalculator";
import React from "react";

export default function Calculator({ formulaData, category }) {
  return (
    <>
      <BackIcon />
      <PipeCalculator formulaData={formulaData} category={category} />
    </>
  );
}
