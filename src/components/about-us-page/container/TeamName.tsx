import { fonts } from '@/lib/config/constants'
import { Text, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'
type TeamNameProps=TextProps&{
  children: ReactNode
}

const TeamName:React.FC<TeamNameProps> = ({children, ...props}) => {
  return (
    <Text
      fontSize={{base: "2.2rem", md: "2.8rem"}}
      fontFamily={fonts.heading}
      letterSpacing="0.7px"
      lineHeight={1}
      color="primary.white"
      fontWeight="700"

    {...props}
    >
      {children}
    </Text>
  )
}

export default TeamName