import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Label from '../../../util/label/Label';
import { fonts } from '@/lib/config/constants';
import { VisionHeadingText } from '../../../util';
import { visionData, visionHeader } from '@/lib/data/aboutData';
import { FC } from 'react';

type visonHeaderType = {
	visonHeaderData: {
		tag?: string;
		text?: string;
	};
};

const Vision: FC<visonHeaderType> = ({ visonHeaderData }) => {
	// console.log('sef', visonHeaderData)
	return (
		<Box
			p={{ base: '80px 20px 0px 20px', xl: '80px 120px 0px 120px' }}
			bg='primary.white'
		>
			<Grid
				h='auto'
				templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
				gap='10'
			>
				<GridItem
					paddingRight={{ base: '0px', md: '4rem' }}
					colSpan={{ base: 5, md: 2 }}
				>
					<Box w='full' h='full' borderTop='2px solid #9996a1'>
						<Label paddingTop='1em' text={visionHeader?.tag} color='#141515' />
						<Text
							fontFamily={fonts.heading}
							fontWeight='bold'
							lineHeight='1.05'
							color='primary.black'
							letterSpacing='0.7px'
							py='0.15em'
							fontSize={{ base: '2.35rem', lg: '3.25rem' }}
						>
							{visonHeaderData?.text}
						</Text>
					</Box>
				</GridItem>
				{visionData.map((item, index) => (
					<GridItem key={index} colSpan={{ base: 5, md: 1 }}>
						<Box
							w='full'
							h='full'
							paddingRight={{ base: '0px', md: '10px' }}
							borderTop='2px solid #9996a1'
						>
							<Label
								paddingTop='1em'
								text={visonHeaderData?.tag}
								color={item.label.colorCode}
							/>
							<VisionHeadingText>{item?.heading}</VisionHeadingText>
							<Text lineHeight={1.6}>{item.para}</Text>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default Vision;
