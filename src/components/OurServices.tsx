const OurServices = () => {
  const services = [
    {
      id: "01",
      title: "Fabric Sourcing",
      description:
        "We offer a wide selection of premium denim and non-denim fabrics, providing the perfect base for your designs. Our expert in-house team guides you through textures, weights, and compositions, making it easy to experiment with silhouettes and finishes. We source sustainable and innovative fabrics, ensuring your brand stands out in both quality and environmental responsibility.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5eea8a22e1449fa6e01_Screen%20Shot%202023-05-31%20at%2013.55new-min-p-800.jpg",
    },
    {
      id: "02",
      title: "No Minimum Order",
      description:
        "We proudly offer no minimum order quantity, making premium denim manufacturing accessible to brands of all sizes. Our fully integrated in-house process—from design to production—empowers startups and small businesses to create high-quality, trend-driven denim without the constraints of large MOQs. Whether you're launching a new line or scaling up, we support your growth with flexibility and efficiency.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5ee008c48e205fd0ffd_DSC_0007new-min-p-800.jpg",
    },
    {
      id: "03",
      title: "High Quality",
      description:
        "As a vertically integrated manufacturer, we control every stage of production, ensuring unmatched quality at every step. With rigorous QC checks from fabric inspection to finishing, we guarantee precision, durability, and consistency. Our in-house expertise eliminates third-party involvement, streamlining the process to deliver premium denim that meets global standards with reliability and efficiency.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5ee0ff2d772680649d0_sleeve_up_close%201new-min-p-800.jpg",
    },

    {
      id: "04",
      title: "Bespoke Design",
      description:
        "We provide comprehensive solutions for custom denim, ensuring each piece aligns with your brand’s vision. From fabric selection to garment construction, wash techniques, and trim customization, every detail is crafted to your specifications. Whether you need vintage fades, modern silhouettes, or unique detailing, we execute each step with precision and sustainability in mind.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5eef444e4a686640f2d_raey_cotton_twill_pant%202new-min-p-500.jpg",
    },

    {
      id: "05",
      title: "Efficient Process",
      description:
        "Our seamless in-house production process eliminates third-party dependencies and delays, optimizing workflow for maximum efficiency. From design and fabric selection to cutting, stitching, and finishing, every stage is meticulously managed. With real-time quality control, advanced machinery, and streamlined operations, we guarantee faster turnarounds, reduced waste, and a hassle-free experience.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5eea9da14dcb4886efc_pexels-cottonbro-studio-6764143new-min-p-800.jpg",
    },
  ];

  return (
    <div className="px-5 py-10 mx-auto font-aptosNarrow">
      <h1 className="text-[26px] sm:text-3xl 2xl:text-[40px] mb-4 text-[#4D4D4D] font-bold">
        Our Services
      </h1>
      <p className=" mb-12 text-[#4B5563]">
        At AH Denim, we deliver premium denim with a commitment to quality,
        seamless communication, and timely service. Our dedicated quality
        control team ensures every piece meets the highest standards, while our
        expert merchandisers maintain proactive collaboration with buyers to
        prevent issues. We prioritize on-time delivery and personalized support,
        ensuring a smooth process from production to shipment. With a focus on
        market trends and innovation, we cater to the evolving needs of our
        global clientele.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 lg:gap-6 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className=" border border-gray-200 shadow-lg rounded-xl bg-white flex flex-col items-center text-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[300px] sm:h-[250px] md:h-[250px] object-cover rounded-t-md "
            />
            <div className="text-[#4D4D4D] p-4 text-lg font-semibold ">
              <div className="mb-1">{service.id}</div>
              <h2 className="text-[22px] mb-3 font-semibold">
                {service.title}
              </h2>
              <p className="text-[14px] text-justify  text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
