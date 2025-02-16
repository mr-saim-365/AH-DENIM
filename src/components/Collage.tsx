import collageImage1 from "../../public/images/collageImage1.jpeg";
import collageImage2 from "../../public/images/collageImage2.jpeg";
import collageImage3 from "../../public/images/collageImage3.jpeg";
import collageImage4 from "../../public/images/collageImage4.jpeg";

const ImageCollage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 p-4">
      {/* Top wide image */}
      <div className="col-span-2">
        <img
          src={collageImage1}
          alt="Denim hanging"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Left-side large image */}
      <div className="row-span-2">
        <img
          src={collageImage2}
          alt="Denim jacket"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle image */}
      <div>
        <img
          src={collageImage3}
          alt="Cropped pants"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right-side image */}
      <div>
        <img
          src={collageImage4}
          alt="White pants"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Bottom left denim close-up */}
      <div>
        <img
          src={collageImage1}
          alt="Denim close-up"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Bottom right sewing process */}
      <div>
        <img
          src={collageImage2}
          alt="Denim sewing"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
