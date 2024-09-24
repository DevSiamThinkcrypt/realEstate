import { fonts } from '@/lib/config/constants'
import { Text, TextProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type TeamDescriptionProps=TextProps&{
  children: ReactNode
}
                            
const TeamDescription:React.FC<TeamDescriptionProps> = ({children, ...props}) => {
  return (
    <Text
      color="primary.white"
      fontSize={{base: ".9rem", md: "1rem"}}
      lineHeight={1.25}
      fontWeight="700"
      letterSpacing="0.7px"
      fontFamily={fonts.heading}
      {...props}
    >
      {children}
    </Text>
  )
}

export default TeamDescription