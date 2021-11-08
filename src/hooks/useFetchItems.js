import { useState, useEffect } from "react";

import { getFilms } from "../helpers/getFilms";

export const useFetchItems = ({ keyword="" }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms(keyword).then((data) => {if (data.length > 0) setFilms(data)});
  }, [keyword]);

  return films;
};
