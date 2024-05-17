import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./pages/main/main";
import { MovieDetail } from "./pages/movieDetail/movieDetail";
import { SearchMovie } from "./pages/serchMovie/searchMovie";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navigate to="main" />} />
        <Route exact path="/main" element={<Main></Main>} />
        <Route
          exact
          path="/movie-detail"
          element={<MovieDetail></MovieDetail>}
        />
        <Route
          exact
          path="/search-movie"
          element={<SearchMovie></SearchMovie>}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
