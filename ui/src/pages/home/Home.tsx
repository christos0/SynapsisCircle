import { useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";

import {
  CallToAction,
  CoreFeatures,
  FeaturesDisplay,
  Testimonials,
} from "./components";
import Aos from "aos";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container maxW={"3xl"}>
      <CallToAction />
      <Box data-aos="fade">
        <FeaturesDisplay />
        <CoreFeatures />
      </Box>

      <Box data-aos="fade">
        <Testimonials />
      </Box>
    </Container>
  );
};
