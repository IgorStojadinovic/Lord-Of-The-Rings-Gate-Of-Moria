import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../sppinner/Spinner";
import {
  selectCharacter,
  selectMovie,
  getStatus,
  getQuote,
} from "./quotesSlice";

const QuoteResults = () => {
  const status = useSelector(getStatus);
  const quote = useSelector(getQuote);
  const character = useSelector(selectCharacter);
  const movie = useSelector(selectMovie);

  if (status !== "loading") {
    return (
      <AnimatePresence>
        <motion.div
          className="w-full lg:h-full h-screen flex flex-col  justify-center items-start md:items-center lg:flex-wrap lg:items-center lg:justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "keyframes",
            duration: 1,
          }}
        >
          <div className="flex flex-col items-center  lg:w-2/5 p-5">
            <p className=" text-center md:text-xl lg:text-xl">
              "{quote[0].dialog}"
            </p>
            <p> by {character[0].name}</p>
            <p className="pt-5">- {movie[0].name} -</p>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return <Spinner />;
  }
};

export default QuoteResults;
