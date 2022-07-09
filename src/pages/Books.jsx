import { AnimatePresence, motion } from "framer-motion";

import BookOne from "../components/assets/images/book1.jpg";
import BookTwo from "../components/assets/images/book2.jpg";
import BookThree from "../components/assets/images/book3.jpg";

import Navbar from "../components/navigation/Navbar";

const Books = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
        >
          <div className=" h-[1400px] flex  justify-center  md:h-[2500px] lg:h-[90vh] ">
            <div className="flex flex-col w-full justify-evenly items-center md:w-full lg:flex-row lg:h-full lg:items-center ">
              <p className="h-[2%] md:text-2xl lg:hidden">Books</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                }}
                className=" flex justify-center h-[30%]  w-[70%] lg:flex lg:justify-center lg:h-[70%] lg:w-[30%]"
              >
                <figure>
                  <img
                    src={BookOne}
                    alt="The Fellowship Of The Ring"
                    className="h-full lg:object-contain"
                  />
                </figure>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 0.5,
                }}
                className=" flex justify-center h-[30%]  w-[70%] lg:flex lg:justify-center  lg:h-[70%] lg:w-[30%] "
              >
                <figure>
                  <img
                    src={BookTwo}
                    alt="The Two Towers Book"
                    className="h-full lg:object-contain"
                  />
                </figure>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 1,
                }}
                className=" flex justify-center h-[30%]  w-[70%] lg:flex lg:justify-center  lg:h-[70%] lg:w-[30%] "
              >
                <figure>
                  <img
                    src={BookThree}
                    alt="The Return Of The King"
                    className="h-full lg:object-contain"
                  />
                </figure>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Books;
