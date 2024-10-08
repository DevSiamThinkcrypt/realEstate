import Title from '@/components/util/title/Title';
import { fonts } from '@/lib/config/constants';
import {
	Box,
	Flex,
	SimpleGrid,
	Stack,
	Text,
	Image,
	Button,
} from '@chakra-ui/react';

import { FC } from 'react';

type AboutUsLayoutProps = {
	data: {
		title?: string;
		paraOne?: string;
		paraTwo?: string;
		image?: string;
	};
	oddOrder?: boolean;
};

const AboutUsLayout: FC<AboutUsLayoutProps> = ({ data, oddOrder }) => {
	return (
		<Box p={{ base: '20px 20px', xl: '20px 120px' }}>
			<SimpleGrid columns={{ base: 1, md: 2 }}>
				<Stack
					order={{ base: '1', md: oddOrder ? '2' : '1' }}
					w='full'
					h='full'
					alignItems='left'
					justifyContent='center'
					paddingLeft={oddOrder ? { base: '0', md: '2rem' } : ''}
					paddingRight={oddOrder ? { base: '0', md: '2rem' } : ''}
				>
					<Title textAlign={'left'} text={data?.title} />
					<Text
						fontFamily={fonts.text}
						textAlign='left'
						fontSize={{ base: '1rem', md: '1rem', lg: '1.15rem' }}
						lineHeight='1.6'
						pr='0.4rem'
						mb='12px'
						mt={{ base: '0', md: '10px' }}
						fontWeight='500'
						maxW='48rem'
					>
						{data?.paraOne}
					</Text>
					<Text
						fontFamily={fonts.text}
						textAlign='left'
						fontSize={{ base: '1rem', md: '1rem', lg: '1.15rem' }}
						lineHeight='1.6'
						pr='0.4rem'
						fontWeight='500'
						maxW='48rem'
					>
						{data?.paraTwo}
					</Text>
				</Stack>
				<Flex
					order={{ base: '2', md: oddOrder ? '1' : '2' }}
					w='full'
					minH={{ base: 'auto', md: '600px' }}
					mt={{ base: '1.2rem', md: 0 }}
				>
					<Image
						w='full'
						h='full'
						src={data?.image}
						alt='Story Image'
						objectFit='cover'
					/>
				</Flex>
			</SimpleGrid>
		</Box>
	);
};

export default AboutUsLayout;
