import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  selectSingleCharacter,
  fetchCharacter,
  setAlert,
  getAlertStatus,
  clearCharacter,
} from './charactersSlice';

import CharacterResults from './CharacterResults';
import Alert from '../alert/Alert';
import Navbar from '../../navigation/Navbar';

function Characters() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const character = useSelector(selectSingleCharacter);

  const alert = useSelector(getAlertStatus);

  const handleChange = (e) => {
    const string = e.target.value.toString();
    setText(string.charAt(0).toUpperCase() + string.slice(1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      dispatch(setAlert(true));
    } else {
      dispatch(fetchCharacter(text));
      dispatch(setAlert(false));
    }
  };

  const ClearBtn = () => {
    dispatch(clearCharacter);
  };

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          className=" flex flex-col items-center w-full h-screen md:h-screen lg:h-[90vh] lg:items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 1,
          }}
        >
          <form className="h-full flex form-control items-center pt-7">
            <p className=" text-center h-[25%] text-lg   lg:hidden">
              Searh for your favorite characters
            </p>

            <div className="form-control w-full flex flex-col items-center lg:w-[50%] px-5 ">
              {alert ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: ['50px', '0px', '0px'], opacity: 1 }}
                  transition={{
                    type: 'tween',
                    duration: 1,
                  }}
                >
                  <Alert />
                </motion.div>
              ) : (
                <></>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: 'tween',
                  duration: 2,
                }}
                style={{ height: '50px' }}
              ></motion.div>

              <div className="input-group w-full ">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full "
                  onChange={handleChange}
                  value={text}
                />
                <button className="btn btn-square" onClick={handleSubmit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              {character.length > 0 ? (
                <button className="btn btn-brimary my-8 " onClick={ClearBtn}>
                  Clear
                </button>
              ) : (
                <button className="btn btn-brimary mt-5 hidden">Clear</button>
              )}
            </div>
          </form>
          <div className="flex items-center justify-center h-full">
            {character.length > 0 ? <CharacterResults /> : <div></div>}
          </div>
        </motion.div>{' '}
      </AnimatePresence>
    </>
  );
}

export default Characters;
