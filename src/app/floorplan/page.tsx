'use client';
import { ReusableBanner, Banner, Slider, TwoColumnText } from '@/components';
import React, { FC } from 'react';

import Team from '@/components/about-us-page/sections/team/Team';
import { valueAdditionTeamData } from '@/lib/data/valueAdditionData';
import PageLayout from '@/components/layout/PageLayout';
import { sliderDataWithoutContent } from '@/lib/data/solutionPageData';
import { useGetContentsQuery } from '@/store/services/contentApi';

const FloorPlan = () => {
	const { data, isLoading, isError } = useGetContentsQuery({});

	const valueData = data?.data?.value;

	return (
		<PageLayout variant='solid'>
			{/* Banner */}
			<Banner text='Our Value Additions' imgSrc='./hero/heroTwo.png' />

			{/* Circular Economy Section */}
			<TwoColumnText data={valueData?.circularEconomyData} />

			<Slider sliderData={sliderDataWithoutContent} />

			{/* Farming Carbon Credit and Trading Section */}
			<TwoColumnText order data={valueData?.farmingCarbonData} />

			{/* Banner Section */}
			<ReusableBanner data={valueData?.valueAdditionBannerData} />

			{/* Farmers E-Learning */}
			<TwoColumnText order data={valueData?.farmersELearningData} />

			{/* Farmers AudioBookd */}
			<TwoColumnText data={valueData?.farmersAudioBookData} />

			{/* Team Section */}
			<Team data={valueData?.valueAdditionTeamData} />

			{/* Farmers Hands Out */}
			<TwoColumnText order data={valueData?.farmersHandsOutData} />

			{/* Interactive Blog */}
			<TwoColumnText data={valueData?.interactiveBlogData} />

			{/* Data Driven */}
			<TwoColumnText order data={valueData?.dataDrivenData} />

			{/* Sustainable */}
			<TwoColumnText data={valueData?.sustainableData} />

			{/* Youth Lead Data Section */}
			<TwoColumnText order data={valueData?.youthLedData} />

			{/* Food TraceAbility Section */}
			<TwoColumnText data={valueData?.foodTraceabilityData} />

			{/* Climate Resilience */}
			<TwoColumnText order data={valueData?.climateResilienceData} />
		</PageLayout>
	);
};

export default FloorPlan;
