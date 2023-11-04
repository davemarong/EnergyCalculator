import { allFormulaData } from "@/Data/formulaData/CombinedData";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import BackIcon from "@/components/IconButton/BackIcon";

export default function Category({ category, setFormulaData }) {
  const router = useRouter();
  return (
    <>
      <BackIcon />
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
