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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="main" />} />
        <Route exact path="/main" element={<Main></Main>} />
        <Route
          exact
          path="/movie-detail"
          element={<MovieDetail></MovieDetail>}
        />
      </Routes>
    </Router>
  );
}

export default App;
