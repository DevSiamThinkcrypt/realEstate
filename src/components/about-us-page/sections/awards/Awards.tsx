'use client';

import Title from '@/components/util/title/Title';
import { Box, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { awardImg } from '@/lib/data/aboutData';
import Slider from 'react-slick';

type AwardsType = {
	awardImgData?: string[];
};

const Awards: FC<AwardsType> = ({ awardImgData }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Box
			overflow='hidden'
			p={{ base: '100px 20px 100px 20px', md: '100px 120px 100px 120px' }}
		>
			<Title textAlign='center' mb='6rem'>
				Award recognitions and achievements
			</Title>

			{/* Slider Section  */}
			<Box className='slider-container'>
				<Slider {...settings}>
					{awardImgData?.map((item, index) => (
						<Box
							w='auto'
							h='80px'
							objectFit='cover'
							key={index}
							opacity={0.8}
							cursor='pointer'
							transition='.4s'
							_hover={{ opacity: '1' }}
							px={{ base: '1.25rem', md: '1.75rem' }}
						>
							<Image w='auto' h='full' src={item} />
						</Box>
					))}
				</Slider>
			</Box>
		</Box>
	);
};

export default Awards;
