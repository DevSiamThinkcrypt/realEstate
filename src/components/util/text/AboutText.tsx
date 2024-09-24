import { fonts } from "@/lib/config/constants";
import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type AboutTextProps = TextProps & {
  children?: ReactNode,
}

const AboutText:React.FC<AboutTextProps> = ({children, ...props}) => {
  return (
    <Text
      fontFamily={fonts.heading}
      fontSize={{ base: "1.25rem", md: "2rem" }}
      lineHeight="1.05"
      fontWeight="bold"
      textAlign="center"
      color="primary.white"
      {...props}
    >
      {children}
    </Text>
  );
};

export default AboutText;
