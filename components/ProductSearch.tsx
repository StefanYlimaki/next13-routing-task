"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductSearch = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={() => router.push(`/search?q=${search}`)}>Search</button>
    </>
  );
};

export default ProductSearch;
