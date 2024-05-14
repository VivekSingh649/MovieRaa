import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "./config/constant";

const movieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const showMovies = async (apiUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      // console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsError({ show: true, msg: error.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    showMovies(`${BASE_URL}/upcoming?${API_KEY}`);
  }, []);

  return (
    <movieContext.Provider value={{ isLoading, isError }}>
      {children}
    </movieContext.Provider>
  );
};

export { movieContext };
export default MovieProvider;
