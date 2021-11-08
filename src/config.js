import dotenv from "dotenv";
dotenv.config();

const variables = {
  APIKEY_MOVIES: process.env.REACT_APP_API_KEY,
  APIHOSTKEY_MOVIES: process.env.REACT_APP_API_HOST_KEY,
};

export default variables;
