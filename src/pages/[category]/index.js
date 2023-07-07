import { allFormulaData } from "@/Data/formulaData/CombinedData";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

export default function Category({ category, setFormulaData }) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      {category.map((item) => {
        return (
          <Link
            key={item.title}
            href={`/${router.query.category}/${item.title}`}
          >
            <Button
              variant="contained"
              onClick={() => {
                setFormulaData(allFormulaData[item.defaultFormula]);
              }}
            >
              {item.title}
            </Button>
          </Link>
        );
      })}
    </>
  );
}
