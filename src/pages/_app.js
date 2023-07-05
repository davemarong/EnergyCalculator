import { allFormulaData } from "@/Data/formulaData/CombinedData";
import { allMeny_item } from "@/Data/Items/Items";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [category, setCategory] = useState(allMeny_item[0].menyItems);
  const [formulaData, setFormulaData] = useState(allFormulaData.Hastighet);

  return (
    <>
      <div>navigation</div>
      <Component
        {...pageProps}
        category={category}
        setCategory={setCategory}
        formulaData={formulaData}
        setFormulaData={setFormulaData}
      ></Component>
    </>
  );
}
