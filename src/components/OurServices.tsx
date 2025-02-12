const OurServices = () => {
  const services = [
    {
      id: "01",
      title: "Bespoke Design",
      description:
        "We offer end-to-end guidance for custom denim pieces, from fabric to final details. Our expertise covers fabric selection, garment shape, wash options, and trim details.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5eef444e4a686640f2d_raey_cotton_twill_pant%202new-min-p-500.jpg",
    },
    {
      id: "02",
      title: "No Minimum Order",
      description:
        "We confidently offer no minimum order quantity. From design to manufacturing, everything is taken care of in-house, empowering small businesses.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5ee008c48e205fd0ffd_DSC_0007new-min-p-800.jpg",
    },
    {
      id: "03",
      title: "High Quality",
      description:
        "Being vertically integrated, we oversee every phase, from design to manufacturing, ensuring top-tier quality without third-party interference.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5ee0ff2d772680649d0_sleeve_up_close%201new-min-p-800.jpg",
    },
    {
      id: "04",
      title: "Fabric Sourcing",
      description:
        "We offer an extensive catalog of fabrics with in-house guidance, allowing you to experiment with silhouettes and designs seamlessly.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5eea8a22e1449fa6e01_Screen%20Shot%202023-05-31%20at%2013.55new-min-p-800.jpg",
    },
    {
      id: "05",
      title: "Efficient Process",
      description:
        "With every stage handled in-house, from designing to manufacturing, we ensure streamlined communication and maximum efficiency.",
      img: "https://cdn.prod.website-files.com/6464150e1f3bf0e607e67cb9/6515e5eea9da14dcb4886efc_pexels-cottonbro-studio-6764143new-min-p-800.jpg",
    },
  ];

  return (
    <div className="px-5 py-10 text-[15px] font-poppins 2xl:w-[70%] mx-auto">
      <h1 className="text-[45px] 2xl:text-[50px] mb-4 text-[#4D4D4D] font-bold">
        Our Services
      </h1>
      <p className=" mb-12 text-lg md:text-xl text-[#4B5563]">
        At AH Denim, we deliver premium denim with a commitment to quality,
        seamless communication, and timely service. Our dedicated quality
        control team ensures every piece meets the highest standards, while our
        expert merchandisers maintain proactive collaboration with buyers to
        prevent issues. We prioritize on-time delivery and personalized support,
        ensuring a smooth process from production to shipment. With a focus on
        market trends and innovation, we cater to the evolving needs of our
        global clientele.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className=" border border-gray-200 shadow-lg rounded-xl bg-white flex flex-col items-center text-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[300px] sm:h-[250px] md:h-[300px] object-cover rounded-t-md "
            />
            <div className="text-[#4D4D4D] p-6 text-lg font-semibold">
              <div className="mb-1">{service.id}</div>
              <h2 className="text-[24px] mb-3 font-semibold">
                {service.title}
              </h2>
              <p className="text-[15px] text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
