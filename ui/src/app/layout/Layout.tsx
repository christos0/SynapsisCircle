import { Box } from "@chakra-ui/react";

import { NavigationMenu } from "../components/navigationMenu/NavigationMenu";

export const Layout = () => {
  return (
    <>
      <Box bg="#282a36" color="#f8f8f2" w="100%" h="20px" />
      <NavigationMenu />
    </>
  );
};
