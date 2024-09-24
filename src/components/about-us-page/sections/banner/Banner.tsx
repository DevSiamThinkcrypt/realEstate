import { Box, Stack, Text } from '@chakra-ui/react';
import { fonts } from '@/lib/config/constants';
import { Overlay } from '@/components/util';
import { FC } from 'react';
type BannerProps = {
	text?: string;
	imgSrc?: string;
	bannarData?:
		| {
				imgSrc?: string;
				text?: string;
		  }
		| undefined;
};

const Banner: FC<BannerProps> = ({ bannarData, text, imgSrc }) => {
	return (
		<Box
			w='full'
			h={{ base: '250px', lg: '500px' }}
			backgroundPosition={{ base: 'center center', lg: 'center center' }}
			backgroundSize='cover'
			backgroundImage={`url(${bannarData?.imgSrc})`}
			backgroundRepeat='no-repeat'
			position='relative'
			mt={{ base: '60px', xl: '80px' }}
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
					{bannarData?.text}
				</Text>
			</Stack>
		</Box>
	);
};

export default Banner;
