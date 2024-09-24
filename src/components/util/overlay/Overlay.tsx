import { Box, BoxProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type OverlayProps = BoxProps &{
  bg?: string;
}


const Overlay:React.FC<OverlayProps>= ({bg, ...props}) => {
  return (
    <Box
      bg={bg || "overlay.500"}
      position="absolute"
      top="0"
      left="0"
      w="full"
      h="full"
      zIndex="2"
      {...props}
    />
  )
}

export default Overlay