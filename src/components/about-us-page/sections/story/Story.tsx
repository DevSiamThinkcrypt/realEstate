import { Box, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Button from '../../../util/button/Button';
import Title from '../../../util/title/Title';

import { VisionHeadingText } from '../../../util';
// import { storyData } from '@/lib/data/aboutData';
import { FC } from 'react';

type storyDataType = {
	storyData: {
		name?: string;
		heading?: string;
		paraOne?: string;
		paraTwo?: string;
		imgSrc?: string;
	};
};

const Story: FC<storyDataType> = ({ storyData }) => {
	return (
		<Box p={{ base: '20px 20px', xl: '20px 120px' }}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={'20px'}>
				<Stack
					order={{ base: 2, md: 1 }}
					w='full'
					h='full'
					alignItems='center'
					justifyContent='center'
				>
					<Title text={storyData?.heading} />
					<Text
						textAlign='center'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						mb='12px'
						mt='10px'
						fontWeight='500'
					>
						{storyData?.paraOne}
					</Text>
					<VisionHeadingText color='header.500' textAlign='center'>
						&quot;{storyData?.paraTwo}&quot;
					</VisionHeadingText>
					<Text
						fontSize='1.025rem'
						textTransform='uppercase'
						color='primary.black'
						fontWeight='bold'
					>
						{storyData?.name}
					</Text>
				</Stack>
				<Flex
					order={{ base: 1, md: 2 }}
					w='full'
					minH={{ base: 'auto', md: '600px' }}
				>
					<Image
						w='full'
						h='full'
						src={storyData?.imgSrc}
						alt='Story Image'
						objectFit='cover'
					/>
				</Flex>
			</SimpleGrid>
		</Box>
	);
};

export default Story;
