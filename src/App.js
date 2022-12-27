import requests from "./API/requests";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Row from "./Components/Row";

function App() {
  return (
    <div style={{ background: "#111" }}>
      <Nav />
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
      <Footer />
    </div>
  );
}

export default App;
