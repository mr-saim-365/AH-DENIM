import collageImage1 from "../../public/images/collageImage1.jpeg";
import collageImage2 from "../../public/images/collageImage2.jpeg";
import collageImage3 from "../../public/images/collageImage3.jpeg";
import collageVideo1 from "../../public/collageVideo1.mp4";
import collageVideo2 from "../../public/collageVideo2.mp4";
import collageVideo3 from "../../public/collageVideo3.mp4";

const ImageCollage = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 p-4">
      <div className="relative col-span-2 md:col-span-1 h-[300px] overflow-hidden rounded-lg">
        <img
          src={collageImage1}
          alt="Denim Art"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <video
          src={collageVideo2}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        ></video>
      </div>
      <div className="relative row-span-3  overflow-hidden rounded-lg">
        <img
          src={collageImage2}
          alt="Sustainable Denim"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="relative h-[70vh] overflow-hidden rounded-lg">
        <video
          src={collageVideo1}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        ></video>
      </div>
      <div className="relative row-span-2 overflow-hidden rounded-lg">
        <img
          src={collageImage3}
          alt="Denim Crafting"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="relative col-span-2 md:col-span-1 h-[300px] overflow-hidden rounded-lg">
        <video
          src={collageVideo3}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        ></video>
      </div>
    </section>
  );
};

export default ImageCollage;
