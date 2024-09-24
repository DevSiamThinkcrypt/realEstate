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

    justifyContent="center"
    alignItems="center"
    bg="red"
    p={PADDING}
    gap={0}
    {...props}
  >
{children}
  </Stack>
  )
}

export default TeamHeaderContainer