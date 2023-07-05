import { PipeCalculator } from "@/components/PipeCalculator/PipeCalculator";
import React from "react";

export default function calculator({ formulaData }) {
  console.log(formulaData.toolTypes);
  return (
    <div>
      <PipeCalculator formulaData={formulaData} />
    </div>
  );
}
