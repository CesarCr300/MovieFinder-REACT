import React, { useState } from "react";
import PropTypes from "prop-types";


export const Searcher = ({ setFilms }) => {
  const [value, setValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setFilms(value);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form action="" onSubmit={onSubmit} className="formSearcher">
      <input type="text" value={value} onChange={onChange} className="inputSearcher"/>
      <button className="btn"><img src="search.svg" alt="search"></img></button>
    </form>
  );
};

Searcher.propTypes = {
    setFilms: PropTypes.func.isRequired,
}