import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../src/components/navbar";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Movie } from "./pages/movie";
import { TvShow } from "./pages/tvShow";
import { Rated } from "./pages/rated";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tvShow/:id" element={<TvShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

