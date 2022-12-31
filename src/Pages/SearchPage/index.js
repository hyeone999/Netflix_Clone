import axios from "../../API/axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");

  console.log("useLocation()", useLocation());
  console.log("searchTerm", searchTerm);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console("error", error);
    }
  };

  return <div></div>;
}
