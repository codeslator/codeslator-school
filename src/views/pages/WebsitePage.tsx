import { FC } from "react"
import { Typography } from "@mui/material"
import Hero from "../components/modules/website/Hero";
import Features from "../components/modules/website/Features";

const WebsitePage: FC = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
};

export default WebsitePage;