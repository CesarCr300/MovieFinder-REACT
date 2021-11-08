import React from "react";
import PropTypes from "prop-types";

import { FilmItem } from "./FilmItem";
import { useFetchItems } from "../hooks/useFetchItems";

export const FilmsGrid = ({ keyword }) => {
  const films = useFetchItems({ keyword });
  return (
    <section className="films-grid">
      {/* {films.length===0 && <p>We dont have results for that word.Try with another word</p>} */}
      
      {films.map((film) => {
        return <FilmItem key={film.title} title={film.title} url={film.url} />;
      })}
    </section>
  );
};

FilmsGrid.propTypes = {
  keyword: PropTypes.string.isRequired,
};
