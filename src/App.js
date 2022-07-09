import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

import Gate from "./pages/Gate";
import Books from "./pages/Books";
import Movies from "./pages/Movies";

import CharactersSearch from "./components/features/characters/CharactersSearch";
import QuoteSearch from "./components/features/quotes/QuoteSearch";

import FirstMovie from "./pages/FirstMovie";
import SecondMovie from "./pages/SecondMovie";
import ThirdMovie from "./pages/ThirdMovie";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Gate />} />

          <Route path="/books" element={<Books />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/fellowshipofthering" element={<FirstMovie />} />
          <Route path="/twotowers" element={<SecondMovie />} />
          <Route path="/returnoftheking" element={<ThirdMovie />} />
          <Route path="/characters" element={<CharactersSearch />} />
          <Route path="/quotes" element={<QuoteSearch />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
