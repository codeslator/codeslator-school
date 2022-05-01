import { FC } from "react"
import { Helmet } from 'react-helmet';
import { Hero, Features, Services, Testimonials, Contact } from '../components/modules/website';

const WebsitePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CodeSchool | Learn more easy...</title>
      </Helmet>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
    </>
  )
};

export default WebsitePage;