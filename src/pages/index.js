import Link from "next/link";
import { useState } from "react";
import { allMeny_item } from "../Data/Items/Items";

export default function Home({ setCategory }) {
  return (
    <>
      <main>
        {allMeny_item.map((item) => {
          return (
            <Link href="/categories">
              <button
                onClick={() => {
                  setCategory(item.menyItems);
                }}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
      </main>
    </>
  );
}
