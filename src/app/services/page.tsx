'use client';
import {
	Banner,
	SliderWithContent,
	TwoColumnText,
} from '@/components';
import { fonts } from '@/lib/config/constants';
import PageLayout from '@/components/layout/PageLayout';
import { serviceAppartment } from '@/lib/data/sectionData';
import { solutionSliderData } from '@/lib/data/serviceData';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
	return (
		<PageLayout variant='solid'>
			{/* Hero Section */}
			<Banner
				text='Commercial Property Services'
				imgSrc='./image/service_banner1.jpg'
			/>

			<TwoColumnText data={serviceAppartment} />

			{/* Service Section */}
			<Flex
				mt={{ base: '2.8rem', sm: '4.5rem' }}
				mb='2rem'
				alignItems='center'
				flexDir='column'
				gap={4}
			>
				<Text
					fontWeight='bold'
					color='black'
					fontSize={{ base: '2.75rem', lg: '4.5rem' }}
					lineHeight={1}
					letterSpacing='0.7px'
					fontFamily={fonts.heading}
				>
					{/* {bannarData?.text} */}
					Service
				</Text>
				<Text
					textAlign='center'
					maxW='66rem'
					padding={{ base: '1rem', sm: 0 }}
					fontSize={{ base: '1rem', sm: '1.2rem' }}
					fontFamily={fonts.text}
					fontWeight='500'
				>
					Our commercial property experts combine commercial acumen and
					innovative strategies with expert market knowledge. We are able to
					fulfil the real estate needs of developers, landlords, occupiers and
					investors, adding value at every stage of our working partnerships.
				</Text>
			</Flex>

			<Box mb={{ base: '2.5rem', lg: '5rem' }}>
				<SliderWithContent sliderData={solutionSliderData} />
			</Box>

			{/* <TwoColumnText data={solutionDataTwo} /> */}
			{/* Banner */}
			{/* <ReusableBanner data={solutionPageBannerData} /> */}
		</PageLayout>
	);
};

export default page;
