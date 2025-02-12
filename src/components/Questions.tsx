import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Questions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What's your minimum order quantity?",
      answer:
        "Our MOQ has always been 1. We believe it’s important to have our services accessible from the smallest to the largest request.",
    },
    {
      question: "Do I need to have prior knowledge or experience with denim?",
      answer:
        "Absolutely none, that’s what we’re here for. We have decades worth of experience, and we would love to share our knowledge with you.",
    },
    {
      question: "What kinds of garments do you produce?",
      answer:
        "If it can be made in denim, we can make it. From jeans, to jackets, to dresses, whatever you need we can most certainly do.",
    },
    {
      question: "What range of sizes do you guys do?",
      answer:
        "We have no restrictions on size, starting from 0 onwards, we're happy to meet your needs and your customers.",
    },

    {
      question: "Do you follow ethical practices as a clothing manufacturer?",
      answer:
        "Sustainable practices are ingrained in the way we work, and every step of the production process. We recycle and re-spin any off cuts, and use industry leading Jeanologia laundries, allowing us to use 80% less water. We're also proud members of the Ellen McArthur foundation, doing our part to be a part of the circular economy.",
    },

    {
      question: "From time of designing, what’s the turn around time",
      answer:
        "Average sampling time is 2 weeks. But this can vary based on the design complexity. Rest assured we thrive to get things turned around in a timely manner, as well as to the highest standard.",
    },

    {
      question: "Where are you based?",
      answer: "We work worldwide but we're based in Shoreditch, London.",
    },

    {
      question: "Do you provide pattern making?",
      answer:
        "Whether you have a unique design concept or need assistance in translating your ideas into patterns, our pattern making services can help bring your vision to life.",
    },

    {
      question: "Do you provide trend information?",
      answer:
        "Yes, we have a dedicated team that works on trend and market research. We also have an in-house collection that is available to buy directly from or use as a starting point for your development.",
    },

    {
      question: "What clients do you work with?",
      answer:
        "We work with many clients, both on a smaller scale as Moseley Road and a larger scale as Chantuque. Please feel free to reach out for more detailed information and we will be happy to discuss.",
    },
  ];

  return (
    <div className="bg-gray-100 font-poppins">
      <div className="px-3 sm:px-5 pt-10 pb-20 text-[14px] md:text-[16px] text-[#4D4D4D] lg:w-[75%] 2xl:w-[50%] mx-auto flex flex-col gap-8 items-center">
        <h1 className="text-[30px] 2xl:text-[50px] text-center text-[#4D4D4D]">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-[40px] w-full">
          {faqData.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleExpand(index)}
                className="mb-[10px] text-[15px] md:text-[18px]  flex sm:justify-between items-start cursor-pointer"
              >
                <div className="w-full">{item.question}</div>

                <MdKeyboardArrowDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`pr-[30px] sm:pr-[60px] md:pr-[80px] transition-all ease-in-out duration-500 overflow-hidden ${
                  expandedIndex === index
                    ? "max-h-40 visible opacity-100"
                    : "max-h-0 opacity-0 invisible"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
