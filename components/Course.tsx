import Image from "next/image";
import Link from "next/link";

const CountryMain = () => {
  const countries: {
    id: number;
    name: string;
    title: string;
    image: string;
  }[] = [
    {
      id: 1,
      name: "UK",
      title: "Explore more about UK",

      image: "/assets/images/countries/uk.png",
    },
    {
      id: 2,
      name: "Canada",
      title: "Explore more about Canada",

      image: "/assets/images/countries/canada.png",
    },
    {
      id: 3,
      name: "Australia",
      title: "Explore more about Australia",

      image: "/assets/images/countries/australia.png",
    },
    {
      id: 4,
      name: "Germany",
      title: "Explore more about Germany",

      image: "/assets/images/countries/germany.png",
    },
    {
      id: 5,
      name: "France",
      title: "Explore more about France",

      image: "/assets/images/countries/france.png",
    },
    {
      id: 6,
      name: "Ireland",
      title: "Explore more about Ireland",

      image: "/assets/images/countries/ireland.png",
    },
  ];
  return (
    <section className="ed-course section-gap section-bg-1 position-relative">
      <div className="ed-course__shapes">
        <Image
          width={37}
          height={41}
          sizes="100vw"
          style={{ width: "37px", height: "41px" }}
          className="ed-course__shape-1 rotate-ani"
          src="/assets/images/course/course-1/shape-1.svg"
          alt="shape-1"
        />
        <Image
          width={133}
          height={154}
          sizes="133x154"
          style={{ width: "133px", height: "154px" }}
          className="ed-course__shape-2 updown-ani"
          src="/assets/images/abstracts/abstract-element-regular.svg"
          alt="shape-2"
        />
        <Image
          width={101}
          height={92}
          sizes="101x92"
          style={{ width: "101px", height: "92px" }}
          className="ed-course__shape-3 updown-ani"
          src="/assets/images/course/course-1/shape-3.svg"
          alt="shape-3"
        />
      </div>
      <div className="container ed-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="ed-section-head text-center">
              <span className="ed-section-head__sm-title">Countries</span>
              <h3 className="ed-section-head__title ed-split-text left">
                Get to Your Dream Country With <span>Southern West International</span> 
              </h3>
              <div className="ed-section-head__btn">
                <Link href="/countries" className="ed-btn">
                  Explore More
                  <i className="fi fi-rr-arrow-small-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Course Card */}
          {countries.map((country) => (
            <CountryMainItem key={country.id} course={country} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CountryMain;


const CountryMainItem = ({
  course,
  containerClass = "col-lg-6 col-xl-4 col-md-6 col-12",
}: {
  course: any;
  containerClass?: string;
}) => {
  return (
    <div className={containerClass}>
      <div className="ed-course__card wow fadeInUp" data-wow-duration="1s" >
        <Link href="/countries" className="ed-course__img">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src={course.image}
            alt="course-img"
          />
        </Link>
        <Link href="/countries" className="ed-course__tag">
          {course.name}
        </Link>
        <div className="ed-course__bodymain">
          <Link href="/countries" className="ed-course__titlelandingpage">
            <h6>{course.title}</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const AllCountries = () => {
  const countries = [
    {
      id: 1,
      name: "UK",
      slugName: "united-kingdom",
      title:
        "Study in the UK and gain a globally recognized degree from prestigious universities.",
      universities: 150,
      highlights: [
        "2-Year PSW Visa",
        "Scholarships Available",
        "Top-Ranked Universities",
      ],
      image: "/assets/images/countries/uk.png",
    },
    {
      id: 2,
      name: "Canada",
      slugName: "canada",
      title:
        "Study in Canada and achieve a globally respected degree in a welcoming country.",
      universities: 100,
      highlights: [
        "Up to 3-Year Work Permit",
        "Affordable Public Colleges",
        "PR Pathways Available",
      ],
      image: "/assets/images/countries/canada.png",
    },
    {
      id: 3,
      name: "Australia",
      slugName: "australia",
      title:
        "Study in Australia and earn a globally recognized degree.",
      universities: 40,
      highlights: [
        "Strong PR Pathways",
        "Work While Studying",
        "High Quality Education",
      ],
      image: "/assets/images/countries/australia.png",
    },
    {
      id: 7,
      name: "Ireland",
      slugName: "ireland",
      title:
        "Study in Ireland and gain an internationally valued degree.",
      universities: 30,
      highlights: [
        "2-Year Post Study Visa",
        "Tech & Pharma Hub",
        "English Speaking Country",
      ],
      image: "/assets/images/countries/ireland.png",
    },
    {
      id: 5,
      name: "France",
      slugName: "france",
      title:
        "Study in France and experience world-class education and culture.",
      universities: 300,
      highlights: [
        "Affordable Tuition",
        "Strong Business Schools",
        "Cultural Experience",
      ],
      image: "/assets/images/countries/france.png",
    },
    {
      id: 6,
      name: "Germany",
      slugName: "germany",
      title:
        "Study in Germany with affordable education and industry-focused programs.",
      universities: 400,
      highlights: [
        "Low or No Tuition",
        "Strong Engineering Programs",
        "Industry Exposure",
      ],
      image: "/assets/images/countries/germany.png",
    },
     {
      id: 4,
      name: "Unitted States of America",
      slugName: "usa",
      title:
        "Study in the USA with diverse academic and research opportunities.",
      universities: 1000,
      highlights: [
        "Scholarship Opportunities",
        "Flexible Course Options",
        "Top Global Rankings",
      ],
      image: "/assets/images/countries/usa.png",
    },
    {
      id: 8,
      name: "New Zealand",
      slugName: "new-zealand",
      title:
        "Study in New Zealand in a safe and high-quality education system.",
      universities: 8,
      highlights: [
        "Post Study Work Visa",
        "Safe Environment",
        "Globally Recognized Degrees",
      ],
      image: "/assets/images/countries/newzealand.jpg",
    },
  ];

  return (
    <section className="ed-course section-gap position-relative">
      <div className="container ed-container">
        <div className="row">
          {countries.map((country) => (
            <div className="col-lg-6 col-md-6 col-12" key={country.id}>
              <div className="ed-course__card ed-course__card--style2">
                
                <div className="ed-course__head position-relative">
                  <Link
                    href={`/countries/${country.slugName}`}
                    className="ed-course__img"
                  >
                    <img src={country.image} alt={country.name} />
                  </Link>

                  <Link
                    href={`/countries/${country.slugName}`}
                    className="ed-course__tag"
                  >
                    {country.name}
                  </Link>
                </div>

                <div className="ed-course__body">

                  <div className="ed-course__lesson">
                    <div className="ed-course__part">
                      <i className="fi-rr-home" />
                      <p>{country.universities}+ Universities</p>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: "18px" }}>
                    {country.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/countries/${country.slugName}`}
                    className="ed-course__title"
                  >
                    <h5>{country.title}</h5>
                  </Link>

                  <div className="ed-course__bottom">
                    <Link href={`/countries/${country.slugName}`}>
                      <button
                        type="button"
                        style={{
                          backgroundColor: "#2563eb",
                          color: "white",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                      >
                        Know More About {country.name}
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export const Course3 = () => {
  const courses: {
    id: number;
    name: string;
    title: string;
    image: string;
  }[] = [
    {
      id: 1,
      name: "Visa Approval",
      title:
        "Seamless visa application support! We assist with documentation, processing, and guidance to ensure a smooth journey to your dream study destination.",

      image: "/assets/images/course/course-1/2.png",
    },
    {
      id: 2,
      name: "Counselling",
      title:
        "Get expert guidance for studying abroad! From university selection to visa support, we help you achieve your dream education hassle-free..",

      image: "/assets/images/course/course-1/1.png",
    },

    {
      id: 3,
      name: "Scholarship Assistance",
      title:
        "Maximize your chances of securing scholarships! We guide you through applications, eligibility, and documentation to make your study abroad dreams more affordable.",

      image: "/assets/images/course/course-1/3.png",
    },
    {
      id: 4,
      name: "Interview Preparation",
      title:
        "Get expert guidance and personalized training to ace your tests and interviews with confidence. Master key skills and strategies for success in your career journey.",

      image: "/assets/images/course/course-1/4.png",
    },
    {
      id: 5,
      name: "Pre departure support",
      title:
        "Ensure a smooth transition abroad with our pre-departure assistance. Get expert guidance on travel, accommodation, cultural adaptation, and essential preparations for a stress-free journey.",

      image: "/assets/images/course/course-1/5.png",
    },
    {
      id: 6,
      name: "Acoomadation Assistance",
      title:
        "Find the perfect home away from home with our accommodation assistance. We help secure safe, affordable, and convenient housing options tailored to your needs.",

      image: "/assets/images/course/course-1/6.png",
    },
    {
      id: 7,
      name: "Education loan support",
      title:
        "Get hassle-free overseas education loan assistance with expert guidance on eligibility, documentation, and approval to fund your dream of studying abroad.",

      image: "/assets/images/course/course-1/7.png",
    },
    {
      id: 8,
      name: "Ticket booking & Airport Pick & Drop",
      title:
        "Book your flight tickets with ease! Get the best deals, flexible options, and seamless travel arrangements for a smooth journey to your study destination.",

      image: "/assets/images/course/course-1/8.png",
    },
    {
      id: 9,
      name: "Course Selection",
      title:
        "Get expert guidance on choosing the right course that aligns with your career goals, interests, and future opportunities for a successful academic journey abroad.",

      image: "/assets/images/course/course-1/9.png",
    },
  ];
  return (
    <section className="ed-course section-gap position-relative">
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className="ed-course__filter">
              {/* <p className="ed-course__filter-text">
                Showing Features Results
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Course Card */}
          {courses.map((course) => (
            <CourseItem
              course={course}
              containerClass="col-lg-6 col-xl-4 col-md-6 col-12"
              key={course.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Course4 = () => {
  const courses: {
    id: number;
    name: string;
    title: string;
    lessons: number;
    teacher: string;
    price: number;
    students: number;
    reviews: number;
    image: string;
  }[] = [
    {
      id: 1,
      name: "Data Science",
      title: "Grow Personal Financial Security Thinking & Principles",
      lessons: 23,
      teacher: "Harrison Stone",
      price: 674,
      students: 673,
      reviews: 9,
      image: "/assets/images/course/course-2/1.png",
    },
    {
      id: 2,
      name: "Business",
      title: "Data Competitive Strategy law and Organization Course",
      lessons: 4,
      teacher: "Alexander Wells",
      price: 633,
      students: 964,
      reviews: 67,
      image: "/assets/images/course/course-2/2.png",
    },
  ];
  return (
    <section className="ed-course ed-course--style2 section-gap position-relative background-image section-bg-7">
      <div className="container ed-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="ed-section-head text-center">
              <span className="ed-section-head__sm-title">BEST SELLER</span>
              <h3 className="ed-section-head__title">
                Our Best Selling Courses
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Course Card */}
          {courses.map((course) => (
            <CourseItem2
              course={course}
              containerClass="col-lg-6 col-xl-6 col-md-6 col-12"
              key={course.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseItem = ({
  course,
  containerClass = "col-lg-6 col-xl-4 col-md-6 col-12",
}: {
  course: any;
  containerClass?: string;
}) => {
  return (
    <div className={containerClass}>
      <div className="ed-course__card wow fadeInUp" data-wow-duration="1s">
        <Link href="/services" className="ed-course__img">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src={course.image}
            alt="course-img"
          />
        </Link>
        <Link href="/services" className="ed-course__tag">
          {course.name}
        </Link>
        <div className="ed-course__body">
          <div className="ed-course__lesson"></div>
          <Link href="/services" className="ed-course__title">
            <h5>{course.title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CourseItem2 = ({
  course,
  containerClass = "col-lg-6 col-xl-6 col-md-6 col-12",
}: {
  course: any;
  containerClass?: string;
}) => {
  return (
    <div className={`${containerClass}`}>
      <div
        className="ed-course__card ed-course__card--style2 wow fadeInUp"
        data-wow-duration="1s"
      >
        <div className="ed-course__head position-relative">
          <Link href="/course-details" className="ed-course__img">
            <Image
              width={250}
              height={222}
              src={course.image}
              alt="course-img"
            />
          </Link>
          <Link href="/course-1" className="ed-course__tag">
            {course.name}
          </Link>
          <a href="#" className="ed-course__bookmarked">
            <i className="fi fi-rr-bookmark" />
          </a>
        </div>
        <div className="ed-course__body">
          <div className="ed-course__lesson">
            <div className="ed-course__part">
              <i className="fi-rr-book" />
              <p>{course.lessons} Lessons</p>
            </div>
            <div className="ed-course__teacher">
              <i className="fi-rr-user" />
              <p>{course.teacher}</p>
            </div>
          </div>
          <Link href="/course-details" className="ed-course__title">
            <h5>{course.title}</h5>
          </Link>
          <div className="ed-course__rattings">
            <ul>
              <li>
                <i className="icofont-star" />
              </li>
              <li>
                <i className="icofont-star" />
              </li>
              <li>
                <i className="icofont-star" />
              </li>
              <li>
                <i className="icofont-star" />
              </li>
              <li>
                <i className="icofont-star" />
              </li>
              <li>
                <span>
                  ({course.reviews > 9 ? course.reviews : "0" + course.reviews}{" "}
                  Reviews)
                </span>
              </li>
            </ul>
          </div>
          <div className="ed-course__bottom">
            <span className="ed-course__price">$383.00</span>
            <div className="ed-course__students">
              <i className="fi fi-rr-graduation-cap" />
              <p>{course.students} Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Course5 = () => {
  const courses: {
    id: number;
    name: string;
    title: string;
    lessons: number;
    teacher: string;
    teacherImage: string;
    price: number;
    students: number;
    reviews: number;
    image: string;
  }[] = [
    {
      id: 1,
      name: "Data Science",
      title: "Grow Personal Financial Security Thinking & Principles",
      lessons: 23,
      teacher: "Harrison Stone",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-1.jpg",
      price: 674,
      students: 673,
      reviews: 9,
      image: "/assets/images/course/course-4/1.png",
    },
    {
      id: 2,
      name: "Business",
      title: "Data Competitive Strategy law and Organization Course",
      lessons: 4,
      teacher: "Alexander Wells",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-2.jpg",
      price: 633,
      students: 964,
      reviews: 67,
      image: "/assets/images/course/course-4/2.png",
    },
    {
      id: 3,
      name: "Design",
      title: "The Complete Guide to Build RESTful API Application",
      lessons: 87,
      teacher: "John Smith",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-3.jpg",
      price: 383,
      students: 316,
      reviews: 87,
      image: "/assets/images/course/course-4/3.png",
    },
    {
      id: 4,
      name: "Development",
      title: "Exploring Learning Landscapes in Academic Business",
      lessons: 4,
      teacher: "Gabriel Cross",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-4.jpg",
      price: 356,
      students: 352,
      reviews: 65,
      image: "/assets/images/course/course-4/4.png",
    },
    {
      id: 5,
      name: "Marketing",
      title: "Voices from the Learning Manage Education Hub",
      lessons: 4,
      teacher: "Maxwell Ford",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-5.jpg",
      price: 643,
      students: 553,
      reviews: 23,
      image: "/assets/images/course/course-4/5.png",
    },
    {
      id: 6,
      name: "Marketing",
      title: "Voices from the Learning Manage Education Hub",
      lessons: 4,
      teacher: "Maxwell Ford",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-6.jpg",
      price: 356,
      students: 352,
      reviews: 94,
      image: "/assets/images/course/course-4/6.png",
    },
  ];
  return (
    <section
      className="ed-course section-gap position-relative background-image"
      style={{ backgroundImage: 'url("./assets/images/section-bg-9.png")' }}
    >
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className="ed-section-head d-flex-between">
              <div className="ed-section-head__info">
                <span className="ed-section-head__sm-title">
                  ONLINE COURSES
                </span>
                <h3 className="ed-section-head__title m-0 ed-split-text left">
                  Get Your Course With Us
                </h3>
              </div>
              <div className="ed-section-head__btn">
                <Link href="/course-1" className="ed-btn">
                  View All Courses
                  <i className="fi fi-rr-arrow-small-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {courses.map((course) => (
            <div className="col-lg-6 col-xl-4 col-md-6 col-12" key={course.id}>
              <div className="ed-course__card ed-course__card--style3 ed-course__card--style4 wow fadeInUp">
                <div className="ed-course__cover">
                  <Link href="/course-details" className="ed-course__img">
                    <Image
                      width={250}
                      height={222}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src={course.image}
                      alt="course-img"
                    />
                  </Link>
                </div>
                <div className="ed-course__body">
                  <div className="ed-course__rattings mg-btm-10">
                    <ul>
                      <li>
                        <i className="icofont-star" />
                      </li>
                      <li>
                        <i className="icofont-star" />
                      </li>
                      <li>
                        <i className="icofont-star" />
                      </li>
                      <li>
                        <i className="icofont-star" />
                      </li>
                      <li>
                        <i className="icofont-star" />
                      </li>
                      <li>
                        <span>
                          (
                          {course.reviews > 9
                            ? course.reviews
                            : "0" + course.reviews}{" "}
                          Reviews)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/course-details" className="ed-course__title">
                    <h5>{course.title}</h5>
                  </Link>
                  <div className="ed-course__lesson m-0">
                    <div className="ed-course__part">
                      <i className="fi-rr-book" />
                      <p>{course.lessons} Lessons</p>
                    </div>
                    <div className="ed-course__students">
                      <i className="fi fi-rr-graduation-cap" />
                      <p>{course.students} Students</p>
                    </div>
                  </div>
                  <div className="ed-course__bottom">
                    <div className="ed-course__teacher">
                      <Image
                        width={28}
                        height={28}
                        src={course.teacherImage}
                        alt="course-instructor-thumb"
                      />
                      <Link href="/course-1">{course.teacher}</Link>
                    </div>
                    <span className="ed-course__price">${course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Course6 = () => {
  const courses: {
    id: number;
    name: string;
    title: string;
    lessons: number;
    teacher: string;
    teacherImage: string;
    description: string;
    price: number;
    students: number;
    reviews: number;
    image: string;
  }[] = [
    {
      id: 1,
      name: "Data Science",
      title: "Data Competitive Strategy law and Organization Course",
      lessons: 23,
      teacher: "Harrison Stone",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-1.jpg",
      description: "Data Competitive Strategy law and Organization Course",
      price: 674,
      students: 673,
      reviews: 9,
      image: "/assets/images/course/course-1/1.png",
    },
    {
      id: 2,
      name: "Business",
      title: "Grow Personal Financial Security Thinking & Principles",
      lessons: 4,
      teacher: "Alexander Wells",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-2.jpg",
      description: "Grow Personal Financial Security Thinking & Principles",
      price: 633,
      students: 964,
      reviews: 67,
      image: "/assets/images/course/course-1/2.png",
    },
    {
      id: 3,
      name: "Design",
      title: "The Complete Guide to Build RESTful API Application",
      lessons: 87,
      teacher: "John Smith",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-3.jpg",
      description: "The Complete Guide to Build RESTful API Application",
      price: 383,
      students: 316,
      reviews: 87,
      image: "/assets/images/course/course-1/3.png",
    },
    {
      id: 4,
      name: "Development",
      title: "Exploring Learning Landscapes in Academic Business",
      lessons: 4,
      teacher: "Gabriel Cross",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-4.jpg",
      description: "Exploring Learning Landscapes in Academic Business",
      price: 356,
      students: 352,
      reviews: 65,
      image: "/assets/images/course/course-1/4.png",
    },
    {
      id: 5,
      name: "Marketing",
      title: "Voices from the Learning Manage Education Hub",
      lessons: 4,
      teacher: "Maxwell Ford",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-5.jpg",
      description: "Voices from the Learning Manage Education Hub",
      price: 643,
      students: 553,
      reviews: 23,
      image: "/assets/images/course/course-1/5.png",
    },
    {
      id: 6,
      name: "Marketing",
      title: "Voices from the Learning Manage Education Hub",
      lessons: 4,
      teacher: "Maxwell Ford",
      teacherImage:
        "/assets/images/course/course-3/course-instructor-thumb-6.jpg",
      description: "Voices from the Learning Manage Education Hub",
      price: 356,
      students: 352,
      reviews: 94,
      image: "/assets/images/course/course-1/6.png",
    },
  ];
  return (
    <section className="ed-course section-gap position-relative home-4">
      <div className="container ed-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="ed-section-head text-center">
              <span className="ed-section-head__sm-title">ONLINE COURSES</span>
              <h3 className="ed-section-head__title ed-split-text left">
                Get Your Course With Us
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {courses.map((course) => (
            <div className="col-lg-6 col-xl-4 col-md-6 col-12" key={course.id}>
              <div
                className="ed-course__card ed-course__card--style3 wow fadeInUp"
                data-wow-duration="1s"
              >
                <Link href="/course-details" className="ed-course__img">
                  <img src={course.image} alt="course-img" />
                </Link>
                <Link href="/course-1" className="ed-course__tag">
                  {course.name}
                </Link>
                <div className="ed-course__body">
                  <div className="ed-course__lesson">
                    <div className="ed-course__part">
                      <i className="fi-rr-book" />
                      <p>{course.lessons} Lessons</p>
                    </div>
                    <div className="ed-course__rattings">
                      <ul>
                        <li>
                          <i className="icofont-star" />
                        </li>
                        <li>
                          <span>
                            {course.reviews} ({course.reviews})
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/course-details" className="ed-course__title">
                    <h5>{course.title}</h5>
                  </Link>
                  <p>{course.description}</p>
                  <div className="ed-course__bottom">
                    <div className="ed-course__teacher">
                      <img
                        src={course.teacherImage}
                        alt="course-instructor-thumb"
                      />
                      <Link href="/course-1">{course.teacher}</Link>
                    </div>
                    <span className="ed-course__price">${course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ed-section-bottom-btn">
              <Link href="/course-1" className="ed-btn">
                View All Courses
                <i className="fi fi-rr-arrow-small-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


