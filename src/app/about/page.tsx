'use client';
import { Box, Spinner } from '@chakra-ui/react';
import { Banner } from '@/components';

import PageLayout from '@/components/layout/PageLayout';
import { useGetContentsQuery } from '@/store/services/contentApi';
import { aboutUsData, propertyData } from '@/lib/data/propertyData';
import AboutUsLayout from '@/components/about-us-page/sections/AboutUsLayout';

const About = () => {
	const { data, isLoading, isError } = useGetContentsQuery({});

	const aboutPageData = data?.data?.about;
	return (
		<PageLayout variant='solid'>
			{/* Banner Section */}
			{/* <Banner bannarData={aboutPageData?.banner} /> */}
			<Banner text='About Us' imgSrc='./image/about_us_banner_a1.jpg' />
			<Box mb={{ base: '2rem', sm: '6rem' }}>
				{aboutUsData.map((property, index) => (
					<AboutUsLayout data={property} oddOrder={index % 2 === 1} />
				))}
			</Box>
		</PageLayout>
	);
};

export default About;
