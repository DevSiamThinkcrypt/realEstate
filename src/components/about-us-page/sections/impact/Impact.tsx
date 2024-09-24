import { Box, Stack, Text } from '@chakra-ui/react';
import Button from '@/components/util/button/Button';
import { AboutText, Overlay } from '@/components/util';
import { FC } from 'react';

type ImpactProps = {
	impactData?: {
		btnText?: string;
		heading?: string;
		description?: string;
	};
};

const Impact: FC<ImpactProps> = ({ impactData }) => {
	return (
		<Box
			w='full'
			backgroundPosition='center'
			backgroundSize='cover'
			backgroundImage="url('./impact/impact.jpg')"
			position='relative'
			zIndex='11'
			p={{ base: '3rem 1.25rem', md: '4rem 7.5rem' }}
		>
			{/* Overlay */}
			<Overlay />

			{/* Content */}
			<Stack
				zIndex='20'
				justifyContent='center'
				alignItems='center'
				position='relative'
				gap='0px'
			>
				<Text
					color='yellow.500'
					textTransform='uppercase'
					fontSize='1.2rem'
					fontWeight='700'
					textAlign='center'
					lineHeight='1.6'
					mb='.8rem'
				>
					{impactData?.heading}
				</Text>
				<AboutText fontWeight='500' mb='.9rem'>
					{impactData?.description}
				</AboutText>
			</Stack>
		</Box>
	);
};

export default Impact;
