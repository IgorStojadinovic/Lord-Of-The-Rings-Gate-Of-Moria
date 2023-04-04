import { useNavigate } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
const Password = () => {
  const redirect = useNavigate();

  const passwordCheck = (e) => {
    e.preventDefault();
    const pass = e.target.value.toUpperCase();

    setTimeout(() => {
      if (pass === 'MELON') {
        redirect('/books', { replace: true });
      }
    }, 500);

    return;
  };

  return (
    <AnimatePresence>
      <div className="flex  flex-col justify-end lg:justify-end  items-center h-full w-full p-7">
        <div className="flex lg:h-[60%] w-full justify-center items-center  h-[25%]">
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 2,
            }}
          >
            <p className=" text-center text-[white] leading-8 w-full flex justify-center lg:pr-48">
              Doors of Durin
            </p>
          </motion.div>

          <motion.div
            className="w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 2,
              delay: 1,
            }}
          >
            <p className=" text-center leading-8 text-[white]  w-full flex lg:justify-center lg:pl-48 ">
              {' '}
              Lord of Moria
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-center lg:h-[40%] lg:justify-center justify-start  h-[25%] lg:pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 2,
            delay: 2,
          }}
        >
          <p className="text-[white]  lg:text-xl pb-5  ">
            Spreak Friend And Enter
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered  w-full font-bold text-center text-[white] "
            onChange={passwordCheck}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Password;
