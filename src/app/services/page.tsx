'use client';
import {
	Banner,
	ReusableBanner,
	Slider,
	SliderWithContent,
	TwoColumnText,
} from '@/components';
import PageLayout from '@/components/layout/PageLayout';
import SectionTitle from '@/components/util/sectionTitle/SectionTitle';
import { serviceAppartment } from '@/lib/data/sectionData';
import { serviceExpertData, solutionSliderData } from '@/lib/data/serviceData';
import {
	solutionDataOne,
	solutionDataTwo,
	solutionPageBannerData,
} from '@/lib/data/solutionPageData';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
	return (
		<PageLayout variant='solid'>
			{/* Hero Section */}
			<Banner
				text='Commercial Property Services'
				imgSrc='./image/serviceBanner.png'
			/>

			<TwoColumnText data={serviceAppartment} />

			{/* Easy Step Section */}
			<Flex mt='4rem' mb='2rem' justifyContent='center' >
				<Text textAlign='center' maxW='45rem'>
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
