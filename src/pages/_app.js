import { GlobalLayout } from "@/components/Layout/GlobalLayout";
import Nav from "@/components/Nav/Nav";
import { allFormulaData } from "@/Data/formulaData/CombinedData";
import { allMeny_item } from "@/Data/Items/Items";
import { useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function App({ Component, pageProps }) {
  const [category, setCategory] = useState(allMeny_item[0].menyItems);
  const [formulaData, setFormulaData] = useState(allFormulaData.Hastighet);
  const [user, setUser] = useState();
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  useEffect(() => {
    netlifyIdentity.on("init", (user) => {
      setUser(user);
    });
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });
  }, []);

  return (
    <>
      <GlobalLayout>
        <Component
          {...pageProps}
          category={category}
          setCategory={setCategory}
          formulaData={formulaData}
          setFormulaData={setFormulaData}
          user={user}
        ></Component>
      </GlobalLayout>
    </>
  );
}
