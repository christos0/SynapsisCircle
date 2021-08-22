import { Box } from "@chakra-ui/react";

import { Home } from "pages/home";
import { NavigationMenu } from "app/components";

import Logo from "app/assets/logo.png";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Box bg="#282a36" color="#f8f8f2" w="100%" h="20px" />
      <NavigationMenu
        logoSrc={Logo}
        linkItems={[
          { path: "/about", translationKey: "About" },
          { path: "/contact", translationKey: "Contact" },
        ]}
      />
      <Home />
      <Footer />
    </>
  );
};
