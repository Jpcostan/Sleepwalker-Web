import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
      <div className="absolute -top-10" id="Contact" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
          <div className="md:max-w-4xl mx-auto text-center">
            <p className="mb-7 custom-block-subtitle">
              Ready to automate?
            </p>
            <h2 className="mb-8 custom-block-big-title">
              Let's build something together
            </h2>
            <p className="mb-10 text-customGrayText leading-loose max-w-2xl mx-auto">
              Get a free consultation to discuss your automation needs. 
              We'll identify opportunities to save time and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div
                className="custom-button-colored w-64 sm:w-52 h-12 cursor-pointer flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                Get Free Quote
              </div>
              <a
                className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
                href="mailto:contact@sleepwalkersoft.com"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
