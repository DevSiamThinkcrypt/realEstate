import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type TeamContentWrapperProps = BoxProps & {
  children: ReactNode;
};

const TeamContentWrapper: React.FC<TeamContentWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      position="absolute"
      bottom="0"
      left="0"
      w="full"
      p={4}
      color="primary.white"
      px={{ base: ".8rem", md: "1.5rem" }}
      {...props}
      zIndex={99}
    >
      {children}
    </Box>
  );
};

export default TeamContentWrapper;
