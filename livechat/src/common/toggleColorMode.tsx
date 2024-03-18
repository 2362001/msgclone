import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      pos="absolute"
      top="0"
      right="0"
      m="1rem"
      onClick={() => toggleColorMode()}
    >
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ToggleColorMode;
