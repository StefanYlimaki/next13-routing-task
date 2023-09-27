import React from "react";

const SearchResults = ({ searchParams }: { searchParams: { q: string } }) => {
  const { q } = searchParams;
  return (
    <main>
      <h1>SearchResults for the search "{q}"</h1>
    </main>
  );
};

export default SearchResults;
