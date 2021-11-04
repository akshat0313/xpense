
import React, { useState, useContext, useEffect } from "react";
import Rule from "../components/news";
import ReactModal from "react-modal";
import Navbar from "../components/nav";
// import Player from "../components/Player";
import AuthContext from '../../store/auth-context';
import firebase from "../firebaseConfig";
import { motion } from "framer-motion";

function Home({ history }) {
  ReactModal.setAppElement("#root");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ruleNum, setRuleNum] = useState("");
  const [rule, setRule] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);
  const [rules, setRules] = useState(null);

  const authCtx = useContext(AuthContext);

  //Function to store rule and ruleNum in the database:
  const addRule = async () => {
    setIsAdding(true);
    try {
      await firebase.database().ref("Xpense").add({
        rule: rule,
        ruleNum: ruleNum,
        user: authCtx.displayName,
        date: new Date(),
      });
    } catch (err) {
      setError(err.message);
    }
    setIsAdding(false);
  };

  //function to check for snapshot in the database in get back the docs:
  const getRules = async () => {
    firebase
      .collection("rules")
      .orderBy("date", "desc")
      .limit(15)
      .onSnapshot((res) => {
        const Rules = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRules(Rules);
      });
  };

  useEffect(() => {
    getRules();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRule();
    setModalIsOpen(false);
    setRule("");
    setRuleNum("");
  };

  const handleClear = () => {
    setRule("");
    setRuleNum("");
  };

  return (
    <>
      <motion.svg
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -95, opacity: 1 }}
        transition={{ type: "inertia", velocity: 120 }}
        viewBox="95 79 100 100"
        className="absolute top-0 left-0 z-0 h-60 w-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          //animate={{ x: 0, opacity: 1 }}
          //initial={{ x: 100, opacity: 1 }}
          //transition={{ type: "inertia", velocity: 120 }}
          fill="#14FFEC"
          d="M41.8,-43.8C56,-27.7,70.4,-13.9,65.4,-5C60.4,3.9,36.1,7.8,22,10.4C7.8,13,3.9,14.2,-9.4,23.6C-22.7,32.9,-45.3,50.5,-58.8,47.9C-72.2,45.3,-76.5,22.7,-73.8,2.7C-71.1,-17.3,-61.6,-34.7,-48.1,-50.8C-34.7,-66.8,-17.3,-81.6,-1.7,-79.8C13.9,-78.1,27.7,-59.8,41.8,-43.8Z"
          transform="translate(100 100)"
        />
      </motion.svg>
      <div className="relative h-screen">
        <Navbar />
        <div className="container mx-auto py-5 flex flex-col justify-start items-center">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            id="list"
            className="container bg-lightBlack 2xl:h-primary lg:h-secondary h-secondary rounded-lg mx-auto lg:w-3/5 w-full lg:pt-2 pt-1"
          >
            {rules &&
              rules.map((rule) => {
                return (
                  <Rule
                    key={rule.id}
                    user={rule.user}
                    date={rule.date}
                    rule={rule.rule}
                    ruleNum={rule.ruleNum}
                  />
                );
              })}
          </motion.div>
          <button
            className="absolute right-20 lg:bottom-2 lg:right-4 bottom-2 font-mono bg-lightBlack text-white font-medium lg:text-xl text-base outline-none rounded-xl py-2 px-4 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:opacity-90 hover:shadow-primary hover:text-tertiary hover:border-primary border border-black "
            onClick={
                authCtx.isLoggedIn ? () => setModalIsOpen(true) : () => history.push("/login")
            }
          >
            Init Rule
          </button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            closeTimeoutMS={200}
            className="Modal"
            overlayClassName="Overlay"
          >
            <h1 className="text-center text-2xl font-Montserrat font-bold">
              Init your own sigma rule
            </h1>
            <span className="text-4xl">📝</span>
            {error && !isAdding && (
              <p className="text-red-500 pt-2 pb-4 text-center">{error}</p>
            )}
            <form
              className="mb-0 space-y-6  w-3/4 mt-8"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mb-2">
                  <label
                    htmlFor="rulenum"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Rule Number
                  </label>
                  <div className="mt-1">
                    <input
                      value={ruleNum}
                      onChange={(e) => setRuleNum(e.target.value)}
                      type="number"
                      id="rulenum"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                    />
                  </div>
                </div>
                <label
                  htmlFor="rule"
                  className="block text-sm font-medium text-gray-900"
                >
                  Rule
                </label>
                <div className="mt-1">
                  <textarea
                    value={rule}
                    onChange={(e) => setRule(e.target.value)}
                    type="text"
                    autoComplete="off"
                    id="rule"
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  disabled={isAdding}
                  type="submit"
                  className="flex justify-center py-2 px-3 border border-transparent shadow-sm bg-secondary  font-mono font-bold text-xl text-white text-center rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-black  transition-all duration-300 ease-in-out hover:shadow-secondary"
                >
                  {isAdding ? "Initializing..." : "Init"}
                </button>
                <button
                  onClick={handleClear}
                  type="button"
                  className=" ml-3 flex justify-center py-2 px-3 border border-transparent shadow-sm bg-secondary  font-mono font-bold text-xl text-white text-center rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-black hover:shadow-secondary transition-all duration-300 ease-in-out"
                >
                  Clear
                </button>
              </div>
            </form>
          </ReactModal>
          {/* <div className="absolute lg:bottom-1 bottom-2 left-20 lg:left-4">
            <Player />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;