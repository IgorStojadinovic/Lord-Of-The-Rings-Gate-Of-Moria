import { useNavigate } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
const Password = () => {
  const redirect = useNavigate();

  const passwordCheck = (e) => {
    e.preventDefault();
    const pass = e.target.value.toUpperCase();

    setTimeout(() => {
      if (pass === "MELON") {
        redirect("/books", { replace: true });
      }
    }, 500);

    return;
  };

  return (
    <AnimatePresence>
      <div className="flex  flex-col justify-between lg:justify-end  items-center h-full w-full">
        <div className="flex lg:h-[60%] w-full justify-center items-center  h-[60%]">
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 2,
            }}
          >
            <p className=" text-center text-[white] text-xl w-full flex justify-center lg:pr-48">
              Doors of Durin
            </p>
          </motion.div>

          <motion.div
            className="w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 2,
              delay: 1,
            }}
          >
            <p className=" text-center text-[white] text-xl w-full flex lg:justify-center lg:pl-48 ">
              {" "}
              Lord of Moria
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-center lg:h-[40%] lg:justify-center justify-center  h-[40%] lg:pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 2,
            delay: 2,
          }}
        >
          <p className="text-[white] text-lg lg:text-xl pb-2  ">
            Spreak Friend And Enter
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs  font-bold text-center text-[white] uppercase"
            onChange={passwordCheck}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Password;
