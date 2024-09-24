import { fonts } from "@/lib/config/constants";
import { Text, TextProps } from "@chakra-ui/react";
type TitleProps=TextProps &{
  text?: string;
  color?: string;
  children?:string;
};

const Title: React.FC<TitleProps> = ({ text, color,children, ...props }) => {
  return (
    <Text
      pt="0.15em"
      fontFamily={fonts.heading}
      color={color || "primary.black"}
      fontSize={{ base: "2.35rem", md: "3.25rem" }}
      lineHeight="1.05"
      letterSpacing="0.7px"
      fontWeight="bold"
      {...props}
    >
      {children||text}
    </Text>
  );
};

export default Title;
