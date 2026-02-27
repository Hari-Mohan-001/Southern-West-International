"use client";
import Image from "next/image";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export const Faq1 = () => {
  const faq: {
    id: number;
    question: string;
    answer: string;
  }[] = [
    {
      id: 1,
      question: "How can I start with your online class?",
      answer:
        "Excepteur sint occaecat cupidatat non proident sunta in culpa qui officia for this is a for that tempor.",
    },
    {
      id: 2,
      question: "How can I register to your website to learn?",
      answer:
        "Excepteur sint occaecat cupidatat non proident sunta in culpa qui officia for this is a for that tempor.",
    },
    {
      id: 3,
      question: "Can i get lifetime access for your any courses?",
      answer:
        "Excepteur sint occaecat cupidatat non proident sunta in culpa qui officia for this is a for that tempor.",
    },
    {
      id: 4,
      question: "How can I contact a school directly?",
      answer:
        "Excepteur sint occaecat cupidatat non proident sunta in culpa qui officia for this is a for that tempor.",
    },
  ];
  const [activeKey, setActiveKey] = useState<string>("1");
  return (
    <section className="ed-faq section-gap position-relative">
      <div className="container ed-container">
        <div className="ed-faq__inner position-relative">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6 col-12">
              {/* Faq Images  */}
              <div className="ed-faq__images position-relative">
                <div className="ed-faq__images-group">
                  <div className="ed-faq__image-group-1">
                    <Image
                      width={258}
                      height={440}
                      sizes="100vw"
                      style={{ width: "258px", height: "440px" }}
                      className="faq-img-1"
                      src="/assets/images/faq/faq-1/faq-img-1.png"
                      alt="faq-img-1"
                    />
                  </div>
                  <div className="ed-faq__image-group-2">
                    <Image
                      width={258}
                      height={172}
                      sizes="258px"
                      style={{ width: "258px", height: "172px" }}
                      className="faq-img-2"
                      src="/assets/images/faq/faq-1/faq-img-2.png"
                      alt="faq-img-2"
                    />
                    <Image
                      width={258}
                      height={370}
                      sizes="258px"
                      style={{ width: "258px", height: "370px" }}
                      className="faq-img-3"
                      src="/assets/images/faq/faq-1/faq-img-3.png"
                      alt="faq-img-2"
                    />
                  </div>
                </div>
                {/* Shape Elemets  */}
                <div className="ed-faq__shapes">
                  <Image
                    width={159}
                    height={137}
                    sizes="159px"
                    style={{ width: "159px", height: "137px" }}
                    className="ed-faq__shape-1"
                    src="/assets/images/faq/faq-1/shape-1.svg"
                    alt="shape-1"
                  />
                  <Image
                    width={75}
                    height={98}
                    sizes="75px"
                    style={{ width: "75px", height: "98px" }}
                    className="ed-faq__shape-2"
                    src="/assets/images/faq/faq-1/shape-2.svg"
                    alt="shape-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              {/* Faq Content  */}
              <div className="ed-faq__content">
                <div className="ed-section-head m-0">
                  <span className="ed-section-head__sm-title">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                  <h3 className="ed-section-head__title ed-split-text right">
                    Most Popular Questions About Our Online Courses
                  </h3>
                </div>
                <Accordion
                  className="ed-faq__accordion faq-inner accordion"
                  activeKey={activeKey.toString()}
                >
                  {/* Single Faq */}
                  {faq.map((item) => (
                    <div className="ed-faq__accordion-item" key={item.id}>
                      <h2 className="accordion-header" id="headingOne">
                        <Accordion.Item
                          as={"button"}
                          className={`accordion-button ${
                            activeKey === item.id.toString() ? "" : "collapsed"
                          }`}
                          eventKey={item.id.toString()}
                          onClick={() =>
                            setActiveKey(
                              activeKey === item.id.toString()
                                ? ""
                                : item.id.toString()
                            )
                          }
                        >
                          {item.question}
                        </Accordion.Item>
                      </h2>
                      <Accordion.Collapse
                        className="accordion-collapse"
                        eventKey={item.id.toString()}
                      >
                        <div className="ed-faq__accordion-body">
                          <p className="ed-faq__accordion-text">
                            {item.answer}
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq2 = () => {
  const faq: {
    id: number;
    question: string;
    answer: string;
  }[] = [
    {
      id: 1,
      question: "What services does Southern West International provide?",
      answer:
        "We offer complete study abroad guidance including university selection, course counseling, application processing, visa assistance, scholarship guidance, and pre-departure support.",
    },
    {
      id: 2,
      question: "Which countries can I apply to?",
      answer:
        "We assist students in applying to top universities in the UK, Canada, Australia, USA, Ireland, Europe and other leading international study destinations.We have tie ups with 30+ countries and 800+ universities",
    },
    {
      id: 3,
      question: "Do you charge for counseling?",
      answer:
        "Our initial counseling and profile evaluation are completely free. Service charges, if applicable, will be clearly explained before proceeding with applications.",
    },
    {
      id: 4,
      question: "Can you help me choose the right course and university?",
      answer:
        "Yes. Our expert counselors assess your academic background, career goals, and budget to recommend the most suitable universities and programs.",
    },
    {
      id: 5,
      question: "Do you assist with student visa applications?",
      answer:
        "Absolutely. We provide complete visa documentation support, application filing guidance, interview preparation, and updates throughout the process.",
    },
    {
      id: 6,
      question: "Can you help me get scholarships?",
      answer:
        "Yes. We guide eligible students in applying for scholarships, grants, and financial aid offered by universities and institutions.",
    },
    {
      id: 7,
      question: "How long does the admission process take?",
      answer:
        "The timeline depends on the country and university, but generally, it can take 4–12 weeks from application submission to receiving an offer letter.",
    },
    {
      id: 8,
      question: "What documents are required for study abroad applications?",
      answer:
        "Common documents include:  Academic transcripts , Passport copy, English proficiency test scores (IELTS/PTE/TOEFL if required) , Statement of Purpose (SOP) , Letters of Recommendation (LOR). Our team will guide you through the exact requirements.",
    },
    {
      id: 9,
      question: "Do you provide support after admission?",
      answer:
        "Yes. We offer end-to-end support including accommodation guidance, travel assistance, forex support, and pre-departure briefings.",
    },
    {
      id: 10,
      question: "How do I get started?",
      answer:
        "Simply contact us through our website, call us directly, or fill out the inquiry form. Our team will schedule a free consultation to begin your study abroad journey.",
    },
  ];
  const [activeKey, setActiveKey] = useState<string>("1");
  return (
    <section className="ed-faq ed-faq--style2 section-gap position-relative">
      <div className="container ed-container">
        <div className="ed-faq__inner position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="ed-section-head text-center">
                <span className="ed-section-head__sm-title">FAQ’S</span>
                <h3 className="ed-section-head__title ed-split-text left">
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
            <div className="col-12">
              {/* Faq Content  */}
              <div className="ed-faq__content">
                <Accordion
                  className="ed-faq__accordion faq-inner accordion"
                  activeKey={activeKey.toString()}
                >
                  {/* Single Faq */}
                  {faq.map((item) => (
                    <div className="ed-faq__accordion-item" key={item.id}>
                      <h2 className="accordion-header" id="headingOne">
                        <Accordion.Item
                          as={"button"}
                          className={`accordion-button ${
                            activeKey === item.id.toString() ? "" : "collapsed"
                          }`}
                          eventKey={item.id.toString()}
                          onClick={() =>
                            setActiveKey(
                              activeKey === item.id.toString()
                                ? ""
                                : item.id.toString()
                            )
                          }
                        >
                          {item.question}
                        </Accordion.Item>
                      </h2>
                      <Accordion.Collapse
                        className="accordion-collapse"
                        eventKey={item.id.toString()}
                      >
                        <div className="ed-faq__accordion-body">
                          <p className="ed-faq__accordion-text">
                            {item.answer}
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
