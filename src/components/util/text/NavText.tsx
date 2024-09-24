import { Text, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type NavTextProps = TextProps & {
	children?: ReactNode;
};

const NavText: FC<NavTextProps> = ({ children, ...props }) => {
	return (
		<Text
			color='primary.black'
			fontSize='1.025rem'
			lineHeight={1.3}
			fontWeight='500'
			my='10px'
			{...props}
		>
			{children}
		</Text>
	);
};

export default NavText;
