import { fonts } from '@/lib/config/constants';
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { FC } from 'react';

type PrivacySectionPointsProps = {
	data: {
		heading: string;
		text: string;
		points?: {
			head?: string;
			description?: string;
		}[];
	};
};

const PrivacySectionPoints: FC<PrivacySectionPointsProps> = ({
	data,
	...props
}) => {
	return (
		<Box {...props} py='1.5rem' {...props}>
			<Text
				fontSize={{ base: '2rem', lg: '3rem' }}
				fontFamily={fonts.heading}
				color='primary.black'
				fontWeight='600'
			>
				{data?.heading}
			</Text>
			<Text fontSize='1rem' color='primary.black' lineHeight='1.6'>
				{data?.text}
			</Text>
			{data?.points && (
				<UnorderedList position='relative'>
					{data?.points?.map((item, index) => (
						<ListItem
							sx={{
								position: 'relative',
								'::before': {
									position: 'absolute',
									content: '""',
									top: '10px',
									left: '-16px',
									width: '8px',
									height: '8px',
									borderRadius: '50%',
									backgroundColor: 'primary.black',
								},
							}}
							key={index}
						>
							{item?.head && (
								<Text
									as={'span'}
									fontSize='1rem'
									color='primary.black'
									lineHeight='1.6'
									fontWeight='600'
									mr='5px'
								>
									{item.head}
								</Text>
							)}
							<Text
								as={'span'}
								fontSize='1rem'
								color='primary.black'
								lineHeight='1.6'
							>
								{item?.description}
							</Text>
						</ListItem>
					))}
				</UnorderedList>
			)}
		</Box>
	);
};

export default PrivacySectionPoints;
