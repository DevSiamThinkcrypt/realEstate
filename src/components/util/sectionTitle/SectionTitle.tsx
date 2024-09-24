import { Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import Title from '../title/Title';

type SectionTitleProps = {
	title: string;
	subtitle: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle }) => {
	return (
		<Stack
			p={{ base: '1.5rem 0px', md: '1.6rem 120px' }}
			alignItems='center'
			gap='0px'
		>
			<Text
				color='primary.black'
				textTransform='uppercase'
				fontSize='1em'
				fontWeight='500'
				textAlign='center'
			>
				{subtitle}
			</Text>
			<Title>{title}</Title>
		</Stack>
	);
};

export default SectionTitle;
