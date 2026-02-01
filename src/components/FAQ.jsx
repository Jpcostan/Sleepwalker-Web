import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "How long does it take to build a custom AI agent or bot?",
    answer:
      "Simple chatbots and automations typically take 1-2 weeks. More complex AI agents with multiple integrations usually take 2-4 weeks. Enterprise solutions vary based on scope. We'll give you a clear timeline during our free consultation.",
  },
  {
    question: "What platforms do you build for?",
    answer:
      "We build AI agents and bots for Telegram, Discord, Slack, WhatsApp, websites, and custom platforms. We also create workflow automations using Zapier, n8n, Make.com, and custom code integrations with any API.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! All projects include a support period (30-90 days depending on the package). We also offer monthly retainers for ongoing maintenance, updates, and new feature development. Your automation keeps working even after we hand it off.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's what our free consultation is for. We'll discuss your business processes, identify automation opportunities, and recommend the best approach. No pressure, no obligation—just honest advice on how AI can help your business.",
  },
  {
    question: "How much does it cost to run an AI agent?",
    answer:
      "Running costs depend on usage. Simple bots might cost $5-20/month in API fees. More complex AI agents with heavy usage might be $50-200/month. We'll estimate operational costs upfront and help you optimize for your budget.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
