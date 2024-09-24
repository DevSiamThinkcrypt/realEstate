import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = ButtonProps & {
	text?: string;
	bgColor?: string;
	minH?: string;
	padding?: string;
	fontWeight?: string;
	fontSize?: string;
	children?: string;
};

const Button: React.FC<Props> = ({
	text,
	bgColor,
	minH,
	padding,
	fontWeight,
	fontSize,
	children,
	...props
}) => {
	return (
		<ChakraButton
			size='md'
			fontSize={fontSize ? fontSize : '15px'}
			color='white'
			variant='unstyled'
			bg={bgColor ? bgColor : '#D90A2C'}
			minH={minH && minH}
			padding={padding ? padding : '8px 25px'}
			fontWeight={fontWeight ? fontWeight : '400'}
			{...props}
		>
			{children || text}
		</ChakraButton>
	);
};

export default Button;
