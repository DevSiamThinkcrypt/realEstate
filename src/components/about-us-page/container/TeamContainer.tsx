import React, { ReactNode } from 'react'
import {Stack,StackProps} from '@chakra-ui/react'

const PADDING={
    base: "60px 20px",
    md: "60px 100px",
    xl: "60px 450px",
    "2xl": "60px 470px",
  }

type Props=StackProps&{
    children:ReactNode
}

const TeamHeaderContainer:React.FC<Props> = ({children,...props}) => {
  return (
    <Stack
    bg="header.500"
    justifyContent="center"
    alignItems="center"
    p={PADDING}
    gap={0}
    {...props}
  >
{children}
  </Stack>
  )
}

export default TeamHeaderContainer