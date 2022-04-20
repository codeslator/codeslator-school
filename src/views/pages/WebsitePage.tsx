import { FC } from "react"
import Hero from "../components/modules/website/Hero";
import Features from "../components/modules/website/Features";
import Services from "../components/modules/website/Services";
import Testimonials from "../components/modules/website/Testimonials";

const WebsitePage: FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
    </>
  )
};

export default WebsitePage;