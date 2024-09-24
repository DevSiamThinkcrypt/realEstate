import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const FollowUs = () => {
	return (
		<Box
			position='fixed'
			right='0px' // Adjust the position as per your layout
			top='50%'
			alignItems='center'
			zIndex={99} // Control opacity based on visibility
			transition='opacity 0.5s ease-in-out' // Add transition for fade effect
			transform='translateY(-50%)'
		>
			<Text fontWeight='700' color='primary.black' transform='rotate(-90deg)'>
				Follow Us —
			</Text>
		</Box>
	);
};

export default FollowUs;
