import Password from "../components/features/password/Password";
import { AnimatePresence, motion } from "framer-motion";

const Gate = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
      >
        <div className=" main lg:bg-contain bg-cover  bg-top  h-screen  lg:h-screen lg:w-screen">
          <Password />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Gate;
