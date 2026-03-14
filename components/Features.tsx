import Image from "next/image";

export const Features1 = () => {
  const features: {
    id: number;
    name: string;
    bg: string;
    icon: string;
    description: string;
  }[] = [
    {
      id: 1,
      name: "Student Counselling",
      bg: "bg-1",
      icon: "/assets/images/features/features-1/1.svg",
      description: "Get expert guidance for studying abroad! From university selection to visa support, we help you achieve your dream education hassle-free",
    },
    {
      id: 2,
      name: "Top ranking universities",
      bg: "bg-2",
      icon: "/assets/images/features/features-1/2.svg",
      description:
        "We collaborate with top-ranking public universities worldwide to provide students with trusted and high-quality education opportunities.",
    },
    {
      id: 3,
      name: "End-to-End support",
      bg: "bg-3",
      icon: "/assets/images/features/features-1/3.svg",
      description:
        "We provide end-to-end support throughout your study abroad journey, from university selection to visa guidance and post-arrival assistance.",
    },
  ];
  return (
    <section className="ed-features position-relative" style={{backgroundColor:"#314a07"}}>
      <div className="ed-category__shapes">
        
        <Image
          width={45}
          height={37}
          sizes="45px"
          style={{ width: "45px", height: "37px" }}
          className="ed-category__shape-2 rotate-ani"
          src="/assets/images/features/features-1/shape-3.svg"
          alt="shape-2"
        />
      </div>
      <div className="container ed-container">
        <div className="row">
          {/* Single Features Card  */}
          {features.map((feature) => (
            <div className="col-lg-4 col-md-6 col-12" key={feature.id}>
              <div
                className="ed-features__card wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className={`ed-features__icon icon-bg ${feature.bg}`}>
                  <Image
                    width={30}
                    height={30}
                    sizes="30px"
                    style={{ width: "30px", height: "30px" }}
                    src={feature.icon}
                    alt="icon"
                  />
                </div>
                <div className="ed-features__info">
                  <h4>{feature.name}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
