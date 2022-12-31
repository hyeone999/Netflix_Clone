import React from "react";
import Banner from "../../Components/Banner";
import Row from "../../Components/Row";
import requests from "../../API/requests";

export default function Mainpage() {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchURL={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
      />
    </div>
  );
}
