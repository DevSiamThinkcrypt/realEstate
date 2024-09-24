import { Text } from '@chakra-ui/react';
import React from 'react';
type LabelProps = {
	text?: string;
	color?: string;
	padding?: string;
	paddingTop?: string;
	paddingBotton?: string;
};

const Label: React.FC<LabelProps> = ({
	text,
	color,
	padding,
	paddingTop,
	paddingBotton,
}) => {
	return (
		<Text
			color={color}
			fontSize='0.9em'
			fontWeight='500'
			padding={padding}
			textTransform='uppercase'
			paddingTop={paddingTop}
			paddingBottom={paddingBotton}
		>
			{text}
		</Text>
	);
};

export default Label;
