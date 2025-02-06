import { MdKeyboardArrowDown } from "react-icons/md";

const Questions = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="px-5 pt-10 pb-20 text-[14px] md:text-[16px] text-[#4D4D4D] 2xl:w-[50%] mx-auto flex flex-col gap-8 items-center ">
          <div>
            <h1 className="text-[30px] 2xl:text-[50px] text-center">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="flex flex-col gap-[40px]">
            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between items-center">
                What's your minimum order quantity?
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                Our MOQ has always been 1. We believe it’s important to have our
                services accessible from the smallest to the largest request, as
                we place value on what we create, not how much.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between">
                Do I need to have prior knowledge or experience with denim?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                Absolutely none, that’s what we’re here for. We have decades
                worth of experience, and we would love to share our knowledge
                with you.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between items-center">
                What kinds of garments do you produce?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                If it can be made in denim, we can make it. From jeans, to
                jackets, to dresses, whatever you need we can most certainly do.
                To get a better idea, pop by our shop in London and we can show
                you the ranges of styles we have.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between items-center">
                What range of sizes do you guys do?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                We have no restrictions on size, starting from 0 onwards, we're
                happy to meet your needs and your customers.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between">
                Do you follow ethical practices as a clothing manufacturer?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                Sustainable practices are ingrained in the way we work, and
                every step of the production process. We recycle and re-spin any
                off cuts, and use industry leading Jeanologia laundries,
                allowing us to use 80% less water. We're also proud members of
                the Ellen McArthur foundation, doing our part to be a part of
                the circular economy.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between ">
                From time of designing, what’s the turn around time?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                Average sampling time is 2 weeks. But this can vary based on the
                design complexity. Rest assured we thrive to get things turned
                around in a timely manner, as well as to the highest standard.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between ">
                Where are you based?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                We work worldwide but we're based in Shoreditch, London.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between ">
                Do you provide pattern making?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                Whether you have a unique design concept or need assistance in
                translating your ideas into patterns, our pattern making
                services can help bring your vision to life.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between ">
                Do you provide trend information?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                Yes, we have a dedicated team that works on trend and market
                research. We also have an in-house collection that is available
                to buy directly from or use as a starting point for your
                development.
              </div>
            </div>

            <div>
              <div className="mb-[10px] text-[15px] md:text-[18px] flex justify-between ">
                What clients do you work with?
                <MdKeyboardArrowDown size={20} />
              </div>

              <div className="pr-[30px] sm:pr-[60px] md:pr-[80px]">
                We work with many clients, both on a smaller scale as Moseley
                Road and a larger scale as Chantuque. Please feel free to reach
                out for more detailed information and we will be happy to
                discuss.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
