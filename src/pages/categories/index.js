import { allFormulaData } from "@/Data/formulaData/CombinedData";
import Link from "next/link";
import React from "react";
export default function index({ category, setFormulaData }) {
  return (
    <div>
      {category.map((item) => {
        return (
          <Link
            href="/calculator"
            onClick={() => {
              setFormulaData(allFormulaData[item.defaultFormula]);
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
