'use client';

import Title from '@/components/util/title/Title';
import { Box, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { partnersImg } from '@/lib/data/aboutData';
import Slider from 'react-slick';

type PartnersType = {
	partnersImgData?: string[];
};

const Partners: FC<PartnersType> = ({ partnersImgData }) => {

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
			borderBottom='1px solid'
			borderColor='border.300'
		>
			<Title textAlign='center' mb='6rem'>
				Supported By & Our Partners
			</Title>

			{/* Slider Section  */}
			<Box className='slider-container'>
				<Slider {...settings}>
					{partnersImgData?.map((item, index: number) => (
						<Box w='100px' key={index} px={{ base: '1.25rem', md: '1.75rem' }}>
							<Image objectFit={'contain'} w='full' src={item} />
						</Box>
					))}
				</Slider>
			</Box>
		</Box>
	);
};

export default Partners;
