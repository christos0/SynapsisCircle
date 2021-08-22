import { useMediaQuery } from "@chakra-ui/react";

export const useMediaQueries = () => {
  const [isSm] = useMediaQuery("(min-width: 576px)");
  const [isMd] = useMediaQuery("(min-width: 768px)");
  const [isLg] = useMediaQuery("(min-width: 992px)");
  const [isXl] = useMediaQuery("(min-width: 1200px)");

  return { isSm, isMd, isLg, isXl };
};
