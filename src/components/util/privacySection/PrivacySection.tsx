import { fonts } from '@/lib/config/constants';
import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type PrivacySectionProps = {
	data: {
		heading: string;
		text: string;
	};
};

const PrivacySection: FC<PrivacySectionProps> = ({ data, ...props }) => {
	return (
		<Box  py="1.5rem" {...props}>
			<Text
				fontSize={{ base: '2rem', lg: '3rem' }}
				fontFamily={fonts.heading}
				color='primary.black'
				fontWeight='600'
			>
				{data?.heading}
			</Text>
			<Text fontSize='1rem' color='primary.black' lineHeight="1.6">
				{data?.text}
			</Text>
		</Box>
	);
};

export default PrivacySection;
