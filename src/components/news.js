import React from "react";
import moment from "moment";
import { motion } from "framer-motion";

function Rule({ user, date, Rule, RuleNum }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="relative cursor-default w-full pt-6 pb-3 lg:px-10 px-3 mt-3 border-b-2 border-primary border-opacity-60 transform transition duration-500 hover:scale-105"
    >
      <p
        id="Rule-num"
        className="absolute top-0 lg:left-10 left-3
         text-white font-medium"
      >
        {`#${RuleNum}`}
      </p>
      <div className="flex justify-between items-center font-normal text-base font-Roboto text-quaternary">
        <div>
          <h1>{Rule}</h1>
          <p>{moment(date.toDate()).calendar()}</p>
        </div>
        <div>
          ~<span className="font-medium">{user}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Rule;