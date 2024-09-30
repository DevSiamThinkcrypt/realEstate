import Title from '@/components/util/title/Title';
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

type PropertyLayoutProps = {
	data: {
		title?: string;
		price?: string;
		description?: string;
		image?: string;
	};
	oddOrder?: boolean;
};

const PropertyLayout: FC<PropertyLayoutProps> = ({ data, oddOrder }) => {
	return (
		<Box p={{ base: '20px 20px', xl: '20px 120px' }}>
			<SimpleGrid columns={{ base: 1, md: 2 }}>
				<Stack
					order={{ base: '1', md: oddOrder ? '2' : '1' }}
					w='full'
					h='full'
					alignItems='left'
					justifyContent='center'
					// border='1px solid'
					// borderColor='overlay.200'
					// boxShadow='0px 3px 10px rgba(54,58,54,0.2)'
					paddingLeft={oddOrder ? '2rem' : ''}
					paddingRight={oddOrder ? '2rem' : ''}
				>
					<Title textAlign={'left'} text={data?.title} />
					<Text
						textAlign='left'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						mb='12px'
						mt='10px'
						fontWeight='500'
					>
						{data?.price}
					</Text>
					<Text
						textAlign='left'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						fontWeight='500'
						maxW='48rem'
					>
						{data?.description}
					</Text>
				</Stack>
				<Flex
					order={{ base: '2', md: oddOrder ? '1' : '2' }}
					w='full'
					minH={{ base: 'auto', md: '600px' }}
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

export default PropertyLayout;
