import Image from "next/image";
import Link from "next/link";

export const CallToAction1 = () => {
  return (
    <section className="ed-call-action position-relative">
      <div className="container ed-container">
        <div className="ed-call-action__inner position-relative">
          <div className="ed-call-action__shapes">
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="ed-call-action__img">
                <Image
                  width={332}
                  height={448}
                  sizes="100vw"
                  style={{ width: "332px", height: "448px" }}
                  src="/assets/images/call-action/call-action-1/call-action-img.png"
                  alt="call-action-img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 order-class">
              <div className="ed-call-action__content">
                <div className="ed-section-head">
                  <span className="ed-section-head__sm-title">
                    GET STARTED NOW
                  </span>
                  <h3 className="ed-section-head__title">
                    Your Gateway to Global Education <br />
                  
                  </h3>
                  <p className="ed-section-head__text">
                    Start your study abroad journey with expert guidance, top-ranked universities, and complete support at every step.
                  </p>
                </div>
                <div className="ed-call-action__content-btn">
                  <Link href="/contact" className="ed-btn">
                    Start your Study abroad journey
                    <i className="fi fi-rr-arrow-small-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CallToAction2 = () => {
  return (
    <section className="ed-call-action ed-call-action--style2 position-relative overflow-hidden">
      <div className="container ed-container">
        <div className="ed-call-action__inner ed-call-action__inner--style2">
          <div className="ed-call-action__shapes">
            <img
              className="ed-call-action__shape-1"
              src="assets/images/abstracts/abstract-element-regular.svg"
              alt="abstract-element-regular"
            />
            <img
              className="ed-call-action__shape-2"
              src="assets/images/abstracts/abstract-dot-4.svg"
              alt="abstract-dot-4"
            />
            <img
              className="ed-call-action__shape-3"
              src="assets/images/abstracts/abstract-element-regular.svg"
              alt="abstract-element-regular"
            />
            <img
              className="ed-call-action__shape-4"
              src="assets/images/abstracts/abstract-orange-plus-1.svg"
              alt="abstract-orange-plus-1"
            />
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="ed-call-action__img">
                <img
                  src="assets/images/call-action/call-action-2/call-action-img.png"
                  alt="call-action-img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 order-class">
              <div className="ed-call-action__content">
                <div className="ed-section-head">
                  <span className="ed-section-head__sm-title">
                    ONLINE COURSES
                  </span>
                  <h3 className="ed-section-head__title ed-split-text left">
                    Find Your Right Learning Path <br />
                    For Your Future
                  </h3>
                  <p className="ed-section-head__text">
                    Excepteur sint occaecat cupidatat non proident sunt
                    <br />
                    in culpa qui officia deserunt mollit.
                  </p>
                </div>
                <div className="ed-call-action__content-btn">
                  <Link href="/course-1" className="ed-btn">
                    {" "}
                    Start Learning Today
                    <i className="fi fi-rr-arrow-small-right" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
