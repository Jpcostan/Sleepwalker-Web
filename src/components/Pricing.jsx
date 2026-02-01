import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Transparent Pricing
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Solutions for every budget
              </h2>
              <p className="mb-6 text-customGrayText">
                From simple chatbots to enterprise automation systems. 
                Get a free consultation to find the right fit.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Starter
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $500
                    </div>
                    <div className="text-gray-500">
                      starting
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Perfect for simple automations and basic chatbots.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Simple Telegram or Discord bot</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Basic workflow automation</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Up to 3 integrations</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>1 week delivery</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>30 days support</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Professional
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $2,000
                    </div>
                    <div className="text-gray-500">
                      starting
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Full-featured AI agents and complex automations.
                  </p>
                  <ul className="mb-14 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Custom AI agent development</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Multi-platform deployment</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Unlimited integrations</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>2-4 week delivery</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>90 days support</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Enterprise
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      Custom
                    </div>
                    <div className="text-gray-500">
                      pricing
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Enterprise solutions with ongoing support and maintenance.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Enterprise AI systems</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Custom SLA agreement</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Priority development</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Monthly retainer available</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
