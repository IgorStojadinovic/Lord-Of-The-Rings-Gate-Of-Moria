import CharacterItem from "./CharacterItem";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import { selectSingleCharacter } from "./charactersSlice";

const CharacterResults = () => {
  const character = useSelector(selectSingleCharacter);

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        className="flex justify-center"
      >
        <CharacterItem char={character[0]} />
      </motion.div>
    </>
  );
};

export default CharacterResults;
