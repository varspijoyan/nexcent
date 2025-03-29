import ClientsSection from "../components/clients-section/ClientsSection";
import LearnMoreSection from "../components/learn-more-section/LearnMoreSection";
import MainSection from "../components/main-section/MainSection";
import MembershipSection from "../components/membership-section/MembershipSection";
import ServiceSection from "../components/service-section/ServiceSection";

const MainPage = () => {
  return (
    <>
      <MainSection />
      <ClientsSection />
      <MembershipSection />
      <LearnMoreSection />
      <ServiceSection />
    </>
  );
};

export default MainPage;
