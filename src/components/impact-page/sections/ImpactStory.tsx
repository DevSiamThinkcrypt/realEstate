import Title from '@/components/util/title/Title';
import { Box, Flex, SimpleGrid, Stack, Text, Image } from '@chakra-ui/react';

import { FC } from 'react';

type ImpactStoryProps = {
	data: {
		title?: string;
		paraOne?: string;
		paraTwo?: string;
		imgSrc?: string;
	};
	order?: boolean;
};

const ImpactStory: FC<ImpactStoryProps> = ({ data, order }) => {
	return (
		<Box p={{ base: '20px 20px', xl: '20px 120px' }}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={'20px'}>
				<Stack
					order={order ? '2' : '1'}
					w='full'
					h='full'
					alignItems='center'
					justifyContent='center'
				>
					<Title text={data?.title} />
					<Text
						textAlign='center'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						mb='12px'
						mt='10px'
						fontWeight='500'
					>
						{data?.paraOne}
					</Text>
					<Text
						textAlign='center'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						mb='12px'
						mt='10px'
						fontWeight='500'
					>
						{data?.paraTwo}
					</Text>
				</Stack>
				<Flex order={order ? '1' : '2'} w='full' h='full'>
					<Image
						w='full'
						h='full'
						src={data?.imgSrc}
						alt='Story Image'
						objectFit='cover'
					/>
				</Flex>
			</SimpleGrid>
		</Box>
	);
};

export default ImpactStory;
