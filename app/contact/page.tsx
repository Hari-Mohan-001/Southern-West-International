import { CallToAction1 } from "@/components/CallToAction";
import { Contact2 } from "@/components/Contact";
import StudentInquiryForm from "@/components/ContactFormStudents";
import PageBanner from "@/components/PageBanner";

import EdunaLayout from "@/layout/EdunaLayout";
import Image from "next/image";
const page = () => {
  const contact = [
    {
      id: 1,
      icon: "icon-white-phone.svg",
      title: "Phone",
      type: "tel",
      info: ["+91 9037396016", "+91 9496349771"],
      extraLink: "",
    },
    {
      id: 3,
      icon: "icon-white-map.svg",
      title: "Address",
      type: "address",
      info: ["opp. st Stephens church (above RT office) ,college road , pathanamthitta"],
      extraLink: "#",
    },
    {
      id: 2,
      icon: "icon-white-message.svg",
      title: "Email",
      type: "email",
      info: ["southernwestinternational@gmail.com"],
      extraLink: "",
    },  
  ];
  return (
    <EdunaLayout>
      <PageBanner pageName="Contact With Us" />
      <div className="ed-contact__card section-gap">
        <div className="container ed-container">
          <div className="row">
            {/* Single Card  */}
            {contact.map((item) => (
              <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                <div className="ed-contact__card-item">
                  <div className="ed-contact__card-icon">
                    <Image
                      width={43}
                      height={43}
                      sizes="100vw"
                      style={{ width: "43px", height: "43px" }}
                      src={`/assets/images/icons/${item.icon}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="ed-contact__card-info" style={{overflowWrap:"break-word"}}>
                    {item.info.map((info) => (
                      <a
                        href={
                          item.type === "tel"
                            ? `tel:${info}`
                            : item.type === "email"
                            ? `mailto:${info}`
                            : item.extraLink
                        }
                        key={info}
                      >
                        {info}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StudentInquiryForm />
      <CallToAction1 />
    </EdunaLayout>
  );
};
export default page;
