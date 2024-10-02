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

type TwoColumnTextProps = {
	data: {
		title?: string;
		heading?: string;
		paraTwo?: string;
		image?: string;
	};
	order?: boolean;
};

const TwoColumnText: FC<TwoColumnTextProps> = ({ data, order }) => {
	return (
		<Box p={{ base: '20px 20px', xl: '20px 120px' }}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={'20px'}>
				<Stack
					order={{ base: '2', md: order ? '2' : '1' }}
					w='full'
					h='full'
					alignItems='left'
					justifyContent='center'
				>
					<Title
						textAlign={{ base: 'center', md: 'left' }}
						text={data?.title}
					/>
					<Text
						textAlign={{ base: 'center', md: 'left' }}
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						mb='12px'
						mt='10px'
						fontFamily={fonts.text}
						fontWeight='500'
					>
						{data?.heading}
					</Text>
					<Box mx={{ base: 'auto', md: '0' }}>
						<Button fontFamily={fonts.text}>Find an Expert</Button>
					</Box>
				</Stack>
				<Flex
					order={{ base: '1', md: order ? '1' : '2' }}
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

export default TwoColumnText;
