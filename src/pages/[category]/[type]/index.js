import { PipeCalculator } from "@/components/PipeCalculator/PipeCalculator";
import React from "react";

export default function Calculator({ formulaData, category }) {
  return (
    <>
      <PipeCalculator formulaData={formulaData} category={category} />
    </>
  );
}
