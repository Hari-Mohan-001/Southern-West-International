import { CallToAction1 } from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import EdunaLayout from "@/layout/EdunaLayout";
import Image from "next/image";
import { countryData } from "@/db/countryDb";

interface props {
  params: Promise<{ name: string }>;
}

const page = async ({ params }: props) => {
  const { name } = await params;
  const country = countryData.find(
    (item) => item.slugName.toLowerCase() == name,
  );
  let i = 1;

  return (
    <EdunaLayout>
      <PageBanner pageTitle="Country Details" />
      <section className="ed-course__details">
        <div className="container ed-container">
          <div className="row">
            <div className="col-lg-8 col-12">
              {/* Course Details Content */}
              <div className="ed-course__details-content">
                {/* Course Details Image */}
                <div className="ed-course__details-img">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={`/assets/images/country-details/${country?.name.toLowerCase()}.png`}
                    alt="course-details-img-1"
                  />
                </div>
                <h3>{country?.title1}</h3>
                <p>{country?.about}</p>
                <br />
                <p>{country?.whyThisCountry}</p>
                {/* Course Details Content List */}
                <div className="ed-course__details-list">
                  <h5>Top Universities</h5>
                  <ul>
                    {country?.topUniversities.map((item) => (
                      <li key={item}>
                        <Image
                          width={18}
                          height={18}
                          sizes="100vw"
                          style={{ width: "18px", height: "18px" }}
                          src="/assets/images/country-details/universityIcon.svg"
                          alt="icon-check-blue"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Course Details Image Two */}
                <div className="ed-course__details-img image-2">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/images/country-details/img2.png"
                    alt="course-details-img-2"
                  />
                </div>
                {/* Course Details Content List */}
                <div className="ed-course__details-list">
                  <h4 style={{marginBottom:'40px'}}>Top Selected Courses</h4>
                  <ul>
                    {country?.courses.map((course, index) => (
                      <li key={index} className="course-item">
                        <Image
                          width={18}
                          height={18}
                          sizes="100vw"
                          style={{ width: "18px", height: "18px" }}
                          src="/assets/images/country-details/course.svg"
                          alt="icon-check-blue"
                        />

                        <div className="course-content">
                          <div className="course-header">
                            <span className="course-name">
                              {course.courseName}
                            </span>

                            <div className="degrees">
                              {course.degrees.map((degree, i) => (
                                <span key={i} className="degree-badge">
                                  {degree}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="course-description">
                            {course.title}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              {/* Course Details Sidebar */}
              <div className="ed-course__sidebar">
                <div className="ed-course__sidebar-widget">
                  <h4 className="ed-course__sidebar-title">Country Overview</h4>
                  <ul>
                    <li>
                      Name:
                      <span className="price">
                        {country?.realName || country?.name}
                      </span>
                    </li>
                    <li>
                      Capital:<span>{country?.capital}</span>
                    </li>
                    <li>
                      Intakes:<span>{country?.intake}</span>
                    </li>
                    <li>
                      Avg Tution Fee:<span>{country?.avgTuitionFee}</span>
                    </li>
                    <li>
                      Currency:<span>{country?.currency}</span>
                    </li>
                    <li>
                      Language:<span>{country?.language}</span>
                    </li>
                    <li>
                      PostStudyWork:<span>{country?.postStudyWork}</span>
                    </li>
                  </ul>
                </div>
                <div className="ed-course__sidebar-widget">
                  <h4 className="ed-course__sidebar-title">Contact Us</h4>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image
                        width={28}
                        height={28}
                        sizes="100vw"
                        style={{ width: "28px", height: "28px" }}
                        src="/assets/images/icons/icon-phone-blue.svg"
                        alt="icon-phone-blue"
                      />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Connect with us</span>
                      <a href="tel:+532 321 33 33">+91 9037396016</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image
                        width={28}
                        height={28}
                        sizes="100vw"
                        style={{ width: "28px", height: "28px" }}
                        src="/assets/images/icons/icon-envelope-blue.svg"
                        alt="icon-envelope-blue"
                      />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Send Message</span>
                      <a
                        href="mailto:southernwestinternational@gmail.com"
                        style={{ wordBreak: "break-word" }}
                      >
                        southernwestinternational@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image
                        width={28}
                        height={28}
                        sizes="100vw"
                        style={{ width: "28px", height: "28px" }}
                        src="/assets/images/icons/icon-location-blue.svg"
                        alt="icon-location-blue"
                      />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Our Location</span>
                      <a href="#">
                        opp. st Stephens church (above RT office) ,college road
                        , pathanamthitta
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction1 />
    </EdunaLayout>
  );
};
export default page;
