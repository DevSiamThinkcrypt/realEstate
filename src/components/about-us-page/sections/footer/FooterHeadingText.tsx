import { VisionHeadingText } from "@/components/util";
import { FC } from "react";

const FooterHeadingText: FC<{ text: string }> = ({ text }) => {
  return (
    <VisionHeadingText
      color="primary.white"
      position="relative"
      pb=".8rem"
      mb="1.4rem"
      _before={{
        position: "absolute",
        content: `""`,
        bottom: "0px",
        left: "0px",
        width: "1.4rem",
        height: "5px",
        backgroundColor: "yellow.500",
        borderRadius: "5px",
      }}
    >
      {text}
    </VisionHeadingText>
  );
};

export default FooterHeadingText;
