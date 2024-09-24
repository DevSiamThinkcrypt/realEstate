'use client';
import { Banner, Impact, Slider, VisionHeadingText } from '@/components';
import { ImpactStory } from '@/components/impact-page';
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { sliderDataWithoutContent } from '@/lib/data/solutionPageData';
import { useGetContentsQuery } from '@/store/services/contentApi';
const page = () => {
	const { data, isLoading, isError } = useGetContentsQuery({});
	const impactData = data?.data?.impact;

	return (
		<PageLayout variant='solid'>
			{/* Hero Section */}
			<Banner bannarData={impactData?.banner} />

			{/* Content Section */}
			<ImpactStory data={impactData?.impactStory} />

			{/* Slider */}
			{/* <Slider sliderData={impactData?.sliderDataWithoutContent} /> */}
			<Slider sliderData={sliderDataWithoutContent} />

			{/* Impact Reports */}
			<ImpactStory order data={impactData?.impactReports} />

			{/* Banner */}
			<Impact impactData={impactData?.impactDataBanner} />

			{/* Current Status */}
			<ImpactStory data={impactData?.impactCurrentStatus} />
		</PageLayout>
	);
};

export default page;
