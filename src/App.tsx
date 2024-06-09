import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import MostPopularMovie from "./pages/MostPopularMovie/MostPopularMovie";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import TopRated from "./pages/TopRated/TopRated";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<MostPopularMovie />} />
        <Route path="/movie/:movieID" element={<MovieDetail />} />
        <Route path="/top" element={<TopRated />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
