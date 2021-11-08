import React from "react";
import PropTypes from "prop-types";

export const FilmItem = ({ title, url }) => {
  return (
    <article key={title} className="item">
      <img src={url} alt={title} />
      <h2>{title}</h2>
    </article>
  );
};

FilmItem.propTypes = { title: PropTypes.string, url: PropTypes.string };
