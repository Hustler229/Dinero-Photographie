
import Navigation from "@/ui/components/Navigation/Navigation";
import Seo from "@/ui/components/Seo/seo";
import Container from "@/ui/components/container/container";
import AboutSection from "@/ui/modules/Clients/A propos/about";
import HomeSection from "@/ui/modules/Clients/Acceuil/home";
import OurPortfolio from "@/ui/modules/Clients/Porfolio/PorfolioView";
import Section2 from "@/ui/modules/Clients/features/featureSection2";
import FeedBackSection from "@/ui/modules/Clients/feedback/feedbackSection";
import FooterSection from "@/ui/modules/Clients/footer/footerSection";
import Work from "@/ui/modules/Clients/works/works";
import React from "react";

const HomePage: React.FC = () => {
  
  return (
    <>
      <Seo title="Dinero | Photography" description="Dinero Porfolio" />
      <Navigation/>
      <Container>
        <HomeSection/>
        <AboutSection/>
        <Work/>
        <Section2/>
        <OurPortfolio/>
        <FeedBackSection/>
        <FooterSection/>
      </Container>
    </>
  );
};

export default HomePage;
