import { PipeCalculator } from "@/components/PipeCalculator/PipeCalculator";
import React from "react";

export default function calculator({ formulaData, category }) {
  return (
    <>
      <PipeCalculator formulaData={formulaData} category={category} />
    </>
  );
}
