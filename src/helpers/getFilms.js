import config from '../config'
export const getFilms = async (value) => {
  const response = await fetch(
    `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=series&genre=18&page=1&keyword=${value}&output_language=en&language=en`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":config.APIHOSTKEY_MOVIES,
        "x-rapidapi-key": config.APIKEY_MOVIES,
      },
    }
  );
    const films = await response.json();
  return films.results?.map((film) => {
    return { title: film.title, url: film.posterURLs["154"] };
  });
};
