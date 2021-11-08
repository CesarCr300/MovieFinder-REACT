import React, { useState } from "react";

import { FilmsGrid } from "./FilmsGrid";
import { Searcher } from "./Searcher";

export const MovieFinder = () => {
  const [filmsName, setFilmsName] = useState("");
  return (
    <>
      <Searcher setFilms={setFilmsName} />
      <FilmsGrid key={filmsName} keyword={filmsName} />
    </>
  );
};
