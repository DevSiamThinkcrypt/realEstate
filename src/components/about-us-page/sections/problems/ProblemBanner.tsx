import { Box, Stack, Text } from '@chakra-ui/react';
import { fonts } from '@/lib/config/constants';
import { Overlay } from '@/components/util';

const ProblemBanner = () => {
	return (
		<Box
			w='full'
			h={{ base: '250px', lg: '500px' }}
			backgroundPosition={{ base: 'center', lg: 'top' }}
			backgroundSize='cover'
			backgroundImage="url('./problems.jpeg')"
			position='relative'
		>
			<Stack
				justifyContent='flex-end'
				w='full'
				h='full'
				p={{ base: '80px 20px', xl: '80px 120px' }}
			>
				<Overlay bg='overlay.400' />
				<Text
					fontWeight='bold'
					color='primary.white'
					fontSize={{ base: '2.75rem', lg: '4.5rem' }}
					lineHeight={1}
					letterSpacing='0.7px'
					fontFamily={fonts.heading}
					position='relative'
					zIndex='99'
				>
					What Problem We Are Facing
				</Text>
			</Stack>
		</Box>
	);
};

export default ProblemBanner;
