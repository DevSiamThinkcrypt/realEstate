import { GridItem, GridItemProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type TeamGridItemProps = GridItemProps & {
  children: ReactNode;
};
const TeamGridItem: React.FC<TeamGridItemProps> = ({ children, ...props }) => {
  return (
    <GridItem
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h={{ base: "auto", md: "650px" }}
      transition="width 0.6s"
      position="relative"
      overflow="hidden"
      mb={{ base: "1.6rem", md: "0px" }}
      {...props}
    >
      {children}
    </GridItem>
  );
};

export default TeamGridItem;
