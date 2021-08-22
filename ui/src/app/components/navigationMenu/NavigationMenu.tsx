import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaMoon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { useMediaQueries } from "app/hooks";
import { LanguageSlider } from "./LanguageSlider";

interface ILinkItem {
  path: string;
  translationKey: string;
}

interface INavigationMenuProps {
  linkItems: ILinkItem[];
  logoSrc: string;
}

export const NavigationMenu = ({
  linkItems,
  logoSrc,
}: INavigationMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMd, isXl } = useMediaQueries();
  const { t } = useTranslation();

  if (isXl || isMd)
    return (
      <Center minH="64px" pr="64px" pl="64px" borderBottom="1px solid gray">
        <Flex w="1500px" flexDir="row" align="center" justify="space-around">
          <Image w="100px" h="100px" src={logoSrc} alt="Logo" />
          <Flex flexDir="row" align="center">
            {linkItems.map((v, i) => (
              <Link key={i} color="" mr={12} as={RouterLink} to={v.path}>
                {t(v.translationKey)}
              </Link>
            ))}
            {/* Light or dark. */}
            <Button mr={12} variant="outline">
              <Icon as={FaMoon} />
            </Button>
            <LanguageSlider />
          </Flex>
        </Flex>
      </Center>
    );
  else
    return (
      <Center minH="64px" pr="64px" pl="64px" borderBottom="1px solid gray">
        <Flex w="1500px" flexDir="row" align="center" justify="space-around">
          <Image w="100px" h="100px" src={logoSrc} alt="Logo" />
          <Flex flexDir="row" align="center">
            <Button variant="outline" onClick={onOpen}>
              <Icon as={AiOutlineMenu} />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <Flex flexDir="column" justify="center" align="center" mb={5}>
                    <Image w="100px" h="100px" src={logoSrc} alt="Logo" />
                    {linkItems.map((v, i) => (
                      <Link key={i} color="" as={RouterLink} to={v.path} mt={2}>
                        {t(v.translationKey)}
                      </Link>
                    ))}
                  </Flex>
                  <Flex mr={15} align="center">
                    {/* Light or dark. */}
                    <Button mr={12} variant="outline">
                      <Icon as={FaMoon} />
                    </Button>
                    <LanguageSlider />
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Center>
    );
};
