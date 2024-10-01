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
	Icon,
	Grid,
	GridItem,
} from '@chakra-ui/react';

import { FC } from 'react';
import { IconType } from 'react-icons';

type AmenitiesType = {
	icon?: any;
	text?: string;
};

type PropertyLayoutProps = {
	// data: {
	// 	title?: string;
	// 	price?: string;
	// 	description?: string;
	// 	image?: string;
	// 	amenities?: any;
	// };
	data: {
		image: string;
		title: string;
		price: string;
		description: string;
		flag: string;
		status: string;
		amenities: {
			icon: IconType;
			text: string;
		}[];
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
					paddingLeft={oddOrder ? '2rem' : ''}
					paddingRight={oddOrder ? '2rem' : ''}
				>
					<Title textAlign={'left'} text={data?.title} />
					<Text
						fontFamily={fonts.text}
						textAlign='left'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						mb='12px'
						mt='10px'
						fontWeight='700'
					>
						<strong> {data?.price}</strong>
					</Text>
					<Text
						fontFamily={fonts.text}
						textAlign='left'
						fontSize={{ base: '1rem', md: '1.15rem' }}
						lineHeight='1.6'
						fontWeight='500'
						maxW='48rem'
					>
						{data?.description}
					</Text>
					<Grid
						gridTemplateColumns='repeat(5, 0.5fr)'
						justifyItems='center'
						maxW='35rem'
						mt='2rem'
					>
						{data?.amenities?.map((amenitiy, i) => (
							<GridItem
								key={i}
								display='flex'
								alignItems='center'
								gap='0.5rem'
								_first={{ justifySelf: 'self-start' }}
								justifyItems='center'
							>
								<Icon as={amenitiy.icon} color='#444' boxSize='26px' />
								<Text fontWeight='500' color='#444'>
									{amenitiy.text}
								</Text>
								{/* garage */}
							</GridItem>
						))}
					</Grid>
				</Stack>
				<Flex
					order={{ base: '2', md: oddOrder ? '1' : '2' }}
					w='full'
					minH={{ base: 'auto', md: '600px' }}
					pos={'relative'}
				>
					<Image
						w='full'
						h='full'
						src={data?.image}
						alt='Story Image'
						objectFit='cover'
					/>
					<Box
						bg='white'
						w='max-content'
						px='1.4rem'
						py='0.6rem'
						rounded='md'
						shadow='lg'
						pos={'absolute'}
						top={5}
						left={5}
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<Text fontFamily={fonts.text} fontWeight='600'>
							{data.flag}
						</Text>
					</Box>
					<Box
						w='max-content'
						px='1.4rem'
						py='0.6rem'
						rounded='md'
						shadow='lg'
						pos={'absolute'}
						bottom='0'
						left={1}
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<Text
							fontSize='2.5rem'
							color='white'
							fontFamily={fonts.text}
							fontWeight='600'
							opacity='0.4'
							textTransform='uppercase'
						>
							{data.status}
						</Text>
					</Box>
				</Flex>
			</SimpleGrid>
		</Box>
	);
};

export default PropertyLayout;
// position: absolute;
//     bottom: 7rem;
//     left: 2rem;
//     color: var(--chakra-colors-primary-white);
//     font-size: 12rem;
//     opacity: 0.4;
