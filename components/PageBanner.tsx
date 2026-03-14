import Image from "next/image";
import Link from "next/link";


const PageBanner = ({
  pageTitle,
  pageName = "Our Services",
}: {
  pageTitle?: string;
  pageName?: string;
}) => {
  return (
    <div className="banner-wrapper">
      <section className="page-banner">
        
        {/* Left Shape */}
        <Image
          src="/assets/images/page-banner/shape-1.svg"
          alt="shape-left"
          width={120}
          height={120}
          className="banner-shape banner-shape-left"
        />

        {/* Right Shape */}
        <Image
          src="/assets/images/page-banner/shape-2.svg"
          alt="shape-right"
          width={120}
          height={120}
          className="banner-shape banner-shape-right"
        />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="banner-content">
                <h3 className="banner-title">
                  {pageTitle || pageName}
                </h3>

                <ul className="breadcrumb-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>/</li>
                  <li>{pageTitle || pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default PageBanner;
