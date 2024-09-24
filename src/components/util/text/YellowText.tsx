import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

const YellowText = ({
  children,
  ...props
}: TextProps & { children: ReactNode }) => {
  return (
    <Text
      color="yellow.500"
      textTransform="uppercase"
      fontSize="1rem"
      fontWeight="500"
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
};

export default YellowText;
