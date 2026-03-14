import Image from "next/image";
import Counter from "./Counter";

export const Funfact1 = () => {
  const funfacts: { id: number; name: string; value: number }[] = [
    { id: 1, name: "Successfull Students", value: 150 },
    { id: 2, name: "Countries", value: 30 },
    { id: 3, name: "Universities", value: 800 },
    { id: 4, name: "Courses", value: 500 },
  ];
  return (
    <section className="ed-funfact" style={{marginBottom:"50px",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.08)"}} >
      <div className="container ed-container position-relative overflow-hidden">
        <div className="ed-funfact__shapes">
        </div>
        <div className="ed-funfact__inner">
          <div className="ed-funfact__img">
            <Image
              width={554}
              height={316}
              sizes="554px"
              style={{ width: "554px", height: "316px" }}
              src="/assets/images/funfact/funfact-1/funfact-img.jpg"
              alt="funfact-img"
            />
          </div>
          <div className="ed-funfact__content">
            <div className="row">
              {/* Single Counter  */}
              {funfacts.map((funfact, index) => (
                <div className="col-lg-6 col-md-6 col-6" key={index}>
                  <div
                    className={`ed-funfact__counter ${
                      index <= 1 ? "mg-btm-80" : ""
                    }`}
                  >
                    <h4>
                      <span className="counter">
                        <Counter end={funfact.value} />
                      </span>
                      +
                    </h4>
                    <p>{funfact.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Funfact2 = () => {
  const counters: {
    id: number;
    name: string;
    value: number;
    color: string;
  }[] = [
    { id: 1, name: "Student enrolled", value: 5923, color: "color-text-1" },
    { id: 2, name: "Classes completed", value: 8497, color: "color-text-2" },
    { id: 3, name: "Learners report", value: 7554, color: "color-text-3" },
    { id: 4, name: "Top instructors", value: 2755, color: "color-text-4" },
  ];
  return (
    <section className="ed-funfact ed-funfact--style2">
      <div className="container ed-container position-relative">
        <div className="ed-funfact__inner">
          <div className="row g-0 justify-content-between">
            {/* Single Counter  */}
            {counters.map((counter, index) => (
              <div className="col-xl-auto col-lg-3 col-md-6 col-6" key={index}>
                <div
                  className="ed-funfact__counter wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <h4 className={counter.color}>
                    <span className="counter">
                      <Counter end={counter.value} />
                    </span>
                    +
                  </h4>
                  <p>{counter.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
