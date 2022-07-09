import { useSelector, useDispatch } from "react-redux";
import {
  selectAllQuotes,
  selectCharacter,
  getStatus,
  getQuote,
  selectMovie,
  fetchCharacterByID,
  fetchMovieByID,
  fetchQuotes,
  clearQuote,
  addQuote,
} from "./quotesSlice";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../navigation/Navbar";
import QuoteResults from "./QuoteResults";

const QuoteSearch = () => {
  const dispatch = useDispatch();
  const character = useSelector(selectCharacter);
  const movie = useSelector(selectMovie);
  const quotes = useSelector(selectAllQuotes);
  const status = useSelector(getStatus);
  const quote = useSelector(getQuote);

  const getRandomQuote = async () => {
    dispatch(clearQuote());
    // Get 100 quotes
    const quotesFetched = await dispatch(fetchQuotes());

    //Set random number
    const randomNumber = Math.floor(Math.random() * quotes.length);

    //Pick a random quote out off array of 100 quotes
    const movieQuote = quotesFetched.payload[randomNumber];

    // Select Character ID from selected quote
    const CharID = movieQuote.character;

    //Select Movie ID from selected quote
    const MovieID = movieQuote.movie;

    //Dispatch selected quote to state => state.quote
    dispatch(addQuote(movieQuote));

    //Find the character with the ID from selected quote
    dispatch(fetchCharacterByID(CharID));

    // And also find a movie that the quote is from
    dispatch(fetchMovieByID(MovieID));
  };

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          className="w-full h-[90vh] flex flex-col items-center  w-full xl:pt-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
        >
          {status !== "loading" ? (
            <button className="btn w-[200px] h-[5%] " onClick={getRandomQuote}>
              {" "}
              Get a quote
            </button>
          ) : (
            <></>
          )}

          {character.length > 0 && movie.length > 0 && quote.length > 0 ? (
            <QuoteResults />
          ) : (
            <></>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default QuoteSearch;
