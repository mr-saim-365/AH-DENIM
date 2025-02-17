import collageImage1 from "/images/collageImage1.jpeg";
import collageImage2 from "/images/collageImage2.jpeg";
import collageImage3 from "/images/collageImage3.jpeg";
import collageVideo1 from "/collageVideo1.mp4";
import collageVideo2 from "/collageVideo2.mp4";
import collageVideo3 from "/collageVideo3.mp4";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ImageCollage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const md = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [150, -200]);
  return (
    <section
      ref={container}
      className="grid grid-cols-3 gap-2 md:gap-4 p-4 auto-rows-[200px] md:auto-rows-[300px]"
    >
      {/* Top left: Stacked denim */}
      <motion.div className="relative col-span-2 sm:col-span-1 row-span-2 overflow-hidden ">
        <motion.video
          src={collageVideo1}
          style={{ y: md }}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
        ></motion.video>
      </motion.div>
      {/* Center top: Person wearing cropped pants */}
      <motion.div className="relative col-span-1 row-span-2 sm:row-span-1 overflow-hidden rounded-lg">
        <motion.img
          src={collageImage2}
          style={{ y: sm }}
          alt="Modern Minimalism"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
        />
      </motion.div>
      {/* Top right: White pants */}
      <motion.div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
        <motion.img
          src={collageImage3}
          style={{ y: sm }}
          alt="White Pants Look"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
        />
      </motion.div>
      {/* Middle left: Person wearing a green oversized jacket */}
      <motion.div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
        <motion.video
          src={collageVideo2}
          style={{ y: lg }}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
        ></motion.video>
      </motion.div>

      {/* Center: Denim close-up with layered waistbands */}
      <motion.div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
        <motion.video
          src={collageVideo3}
          style={{ y: md }}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
        ></motion.video>
      </motion.div>

      {/* Bottom right: Cutting denim fabric */}
      <motion.div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
        <motion.img
          src={collageImage1}
          style={{ y: sm }}
          alt="Stacked Denim"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default ImageCollage;
