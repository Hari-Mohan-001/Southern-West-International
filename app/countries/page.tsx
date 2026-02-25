import { AllCountries } from "@/components/Course";
import PageBanner from "@/components/PageBanner";
import EdunaLayout from "@/layout/EdunaLayout";
const page = () => {
  return (
    <EdunaLayout footer={2}>
      <PageBanner pageTitle="Explore all countries" pageName="Countries" />
      <AllCountries />
    </EdunaLayout>
  );
};
export default page;
