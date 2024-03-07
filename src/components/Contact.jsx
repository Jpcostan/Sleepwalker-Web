import { useState } from "react";
import { motion } from "framer-motion";


export const Contact = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
  <div className="absolute -top-10" id="Contact" />
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
      <div className="md:max-w-4xl mx-auto">
        <p className="mb-7 custom-block-subtitle text-center">
          Need some software?
        </p>
        <h2 className="mb-16 custom-block-big-title text-center">
          Contact us
        </h2>
        <div className="mb-11 flex flex-wrap -m-1">
        
        </div>
      </div>
    </div>
  </motion.div>
</section>
);

