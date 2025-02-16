import collageImage1 from "/images/collageImage1.jpeg";
import collageImage2 from "/images/collageImage2.jpeg";
import collageImage3 from "/images/collageImage3.jpeg";
import collageVideo1 from "/collageVideo1.mp4";
import collageVideo2 from "/collageVideo2.mp4";
import collageVideo3 from "/collageVideo3.mp4";

const ImageCollage = () => {
  return (
    <section className="grid grid-cols-3 gap-2 md:gap-4 p-4 auto-rows-[200px] md:auto-rows-[300px]">
      {/* Top left: Stacked denim */}
      <div className="relative col-span-2 sm:col-span-1 row-span-2 overflow-hidden rounded-lg">
        <video
          src={collageVideo1}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        ></video>
      </div>

      {/* Center top: Person wearing cropped pants */}
      <div className="relative col-span-1 row-span-2 sm:row-span-1 overflow-hidden rounded-lg">
        <img
          src={collageImage2}
          alt="Modern Minimalism"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Top right: White pants */}
      <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
        <img
          src={collageImage3}
          alt="White Pants Look"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Middle left: Person wearing a green oversized jacket */}
      <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
        <video
          src={collageVideo2}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        ></video>
      </div>

      {/* Center: Denim close-up with layered waistbands */}
      <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg">
        <video
          src={collageVideo3}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        ></video>
      </div>

      {/* Bottom right: Cutting denim fabric */}
      <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg">
        <img
          src={collageImage1}
          alt="Stacked Denim"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default ImageCollage;
