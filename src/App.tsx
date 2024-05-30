import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import MostPopularMovie from "./pages/MostPopularMovie/MostPopularMovie";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<MostPopularMovie />} />
        <Route path="/popular/:movieID" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
