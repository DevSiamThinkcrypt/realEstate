import { Box, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Title from '../../../util/title/Title';
import { Overlay } from '../../../util';
import { fonts } from '@/lib/config/constants';
import { values } from '@/lib/data/aboutData';

const Values = () => {
	return (
		<Box
			p={{ base: '80px 20px 20px 20px', xl: '80px 120px 20px 120px' }}
			bg='primary.white'
		>
			<Stack
				p={{ base: '1.5rem 0px', md: '1.6rem 120px' }}
				alignItems='center'
				gap='0px'
			>
				<Text
					color='primary.black'
					textTransform='uppercase'
					fontSize='1em'
					fontWeight='500'
					textAlign='center'
				>
					These are the values that make us unique
				</Text>
				<Title text='We Are' />
			</Stack>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacingX='5px' spacingY='20px'>
				{values.map(item => (
					<Box
						key={item.id}
						w='full'
						h='300px'
						position='relative'
						overflow='hidden'
					>
						{/* Background Image */}
						<Image
							src={item.imgSrc}
							alt='Values Image'
							w='full'
							h='full'
							objectFit='cover'
							position='absolute'
							top='0'
							left='0'
							zIndex='1'
						/>

						{/* Overlay Color */}
						<Overlay />

						<Stack
							position='relative'
							zIndex='3'
							color='white'
							w='full'
							h='full'
							textAlign='center'
							justifyContent='center'
							fontSize='1.5rem'
							px='20px'
						>
							<Text
								fontFamily={fonts.heading}
								letterSpacing='0.7px'
								lineHeight='1.2'
								fontWeight='bold'
								fontSize={{ base: '1.5rem', md: '1.75rem' }}
							>
								{item.title}
							</Text>
							<Text
								lineHeight='1.6'
								fontSize={{ base: '1rem', md: '1.025rem' }}
							>
								{item.para}
							</Text>
						</Stack>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Values;
