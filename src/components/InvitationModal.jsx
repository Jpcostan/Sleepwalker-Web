import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">
              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                Let's Build
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                Something Great
              </h2>

              <ul className="mb-6 text-white mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Free consultation call</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Custom quote within 24 hours</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>No obligation, no pressure</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Expert AI automation advice</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  Sleepwalker
                </div>
              </div>

              <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center">
                Get Your Free Quote
              </h3>
              <form 
                className="flex flex-wrap -m-2 w-full"
                action="https://formspree.io/f/your-form-id"
                method="POST"
              >
                <div className="w-full sm:w-4/5 p-2 mx-auto">
                  <input
                    className="px-4 py-4 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="w-full sm:w-4/5 p-2 mx-auto">
                  <input
                    className="px-4 py-4 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="w-full sm:w-4/5 p-2 mx-auto">
                  <textarea
                    className="px-4 py-4 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 resize-none"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                  <button
                    className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7274f3] transition ease-in-out duration-200"
                    type="submit"
                  >
                    Send Request
                  </button>
                </div>
              </form>
              <p className="mt-4 text-gray-400 text-sm text-center">
                Or email us directly at{" "}
                <a href="mailto:contact@sleepwalkersoft.com" className="text-customSecondary hover:underline">
                  contact@sleepwalkersoft.com
                </a>
              </p>
            </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
