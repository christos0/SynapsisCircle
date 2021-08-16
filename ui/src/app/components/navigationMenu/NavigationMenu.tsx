import { useState } from "react";
import { Box, Button, Center, Flex, Icon, Image } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FaMoon } from "react-icons/fa";

import { currentLanguageState } from "app/global";
import { useMediaQueries } from "app/hooks";

import Logo from "app/assets/logo.png";
import { LanguageSlider } from "./LanguageSlider";

export const NavigationMenu = () => {
  const currLangState = useRecoilValue(currentLanguageState);
  const setCurrLangState = useSetRecoilState(currentLanguageState);

  const { isSm, isLg, isMd, isXl } = useMediaQueries();
  const [currLang, setCurrLang] = useState<string>(currLangState);

  return (
    <Center minH="64px" pr="64px" pl="64px" borderBottom="1px solid gray">
      <Flex w="1500px" flexDir="row" align="center" justify="space-around">
        <Image w="100px" h="100px" src={Logo} alt="Logo" />
        <Flex flexDir="row">
          {/* Light or dark. */}
          <Button variant="outline">
            <Icon as={FaMoon} />
          </Button>
          <LanguageSlider />
        </Flex>
      </Flex>
    </Center>
  );
};
