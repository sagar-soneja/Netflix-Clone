import './App.css';
import Row from "./components/Row"
import request from "./requests"
import Banner from "./components/Banner"
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      
      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now"  fetchURL={request.fetchTrending} isLargeRow={false}/>
      <Row title="Top Rated"  fetchURL={request.fetchTopRated} isLargeRow={false}/>
      <Row title="Action Movies"  fetchURL={request.fetchActionMovies} isLargeRow={false}/>
      <Row title="Comedy Movies"  fetchURL={request.fetchComedyMovies} isLargeRow={false}/>
      <Row title="Horror Movies"  fetchURL={request.fetchHorrorMovies} isLargeRow={false}/>
      <Row title="Documentaries"  fetchURL={request.fetchDocumentaries}isLargeRow={false}/>
    </div>
  );
}

export default App;
