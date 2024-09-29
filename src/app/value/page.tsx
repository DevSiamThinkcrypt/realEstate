'use client';
import { ReusableBanner, Banner, Slider, TwoColumnText } from '@/components';
import React, { FC, useState } from 'react';

import Team from '@/components/about-us-page/sections/team/Team';
import { valueAdditionTeamData } from '@/lib/data/valueAdditionData';
import PageLayout from '@/components/layout/PageLayout';
import { sliderDataWithoutContent } from '@/lib/data/solutionPageData';
import { useGetContentsQuery } from '@/store/services/contentApi';
import Loader from '@/components/util/loader/Loader';
import { serviceExpertData } from '@/lib/data/serviceData';
import { Box, Flex, Grid, Heading, Select } from '@chakra-ui/react';

const ValuePage = () => {
	const [selectedSize, setSelectedSize] = useState('');

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedSize(event.target.value);
	};
	const { data, isLoading, isError } = useGetContentsQuery({});

	const valueData = data?.data?.value;
	const valueTeam = data?.data?.valueTeam;
	const valuePageSlider = data?.data?.value?.sliderDataWithoutContent;

	console.log('value data:', valueData);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<PageLayout variant='solid'>
			{/* Banner */}
			{/* <Banner bannarData={valueData?.banner} /> */}
			<Banner
				text='Commercial Property Services'
				imgSrc='./image/serviceBanner.png'
			/>
			<Box
				borderBottom='1px solid'
				borderColor='overlay.200'
				p={{ base: '8px 20px', xl: '10px 120px' }}
				mt='5rem'
				mb='2rem'
			>
				<Grid gridTemplateColumns='6fr 1fr' alignItems='center'>
					<Heading>For Sale</Heading>
					<Select
						placeholder='Filter'
						size='md'
						value={selectedSize}
						onChange={handleSelectChange}
					>
						<option value='newest'>Newest Listings</option>
						<option value='increase'>Price Increasing</option>
						<option value='decrease'>Price Decreasing</option>
					</Select>
				</Grid>
			</Box>
			{/* Circular Economy Section */}
			{/* <TwoColumnText data={valueData?.circularEconomyData} /> */}
			{/* <TwoColumnText data={serviceExpertData} /> */}

			{/* <Slider sliderData={valuePageSlider} /> */}

			{/* Farming Carbon Credit and Trading Section */}
			{/* <TwoColumnText order data={valueData?.farmingCarbonData} /> */}
			{/* <TwoColumnText order data={serviceExpertData} /> */}

			{/* Banner Section */}
			{/* <ReusableBanner data={valueData?.valueAdditionBannerData} /> */}

			{/* Farmers E-Learning */}
			{/* <TwoColumnText order data={valueData?.farmersELearningData} /> */}
			<TwoColumnText order data={serviceExpertData} />

			{/* Farmers AudioBookd */}
			{/* <TwoColumnText data={valueData?.farmersAudioBookData} /> */}
			<TwoColumnText data={serviceExpertData} />

			{/* Team Section */}
			{/* working */}
			{/* <Team data={valueTeam} /> */}

			{/* Farmers Hands Out */}
			{/* <TwoColumnText data={valueData?.farmersHandsOutData} /> */}
			{/* <TwoColumnText data={serviceExpertData} /> */}

			{/* Interactive Blog */}
			{/* <TwoColumnText data={valueData?.interactiveBlogData} /> */}
			{/* <TwoColumnText data={serviceExpertData} /> */}

			{/* Data Driven */}
			{/* <TwoColumnText order data={valueData?.dataDrivenData} /> */}
			<TwoColumnText order data={serviceExpertData} />

			{/* Sustainable */}
			{/* <TwoColumnText data={valueData?.sustainableData} /> */}
			<TwoColumnText data={serviceExpertData} />

			{/* Youth Lead Data Section */}
			{/* <TwoColumnText order data={valueData?.youthLedData} /> */}
			<TwoColumnText order data={serviceExpertData} />

			{/* Food TraceAbility Section */}
			{/* <TwoColumnText data={valueData?.foodTraceabilityData} /> */}
			{/* <TwoColumnText data={serviceExpertData} /> */}
			<TwoColumnText data={serviceExpertData} />

			{/* Climate Resilience */}
			{/* <TwoColumnText order data={valueData?.climateResilienceData} /> */}
			<TwoColumnText order data={serviceExpertData} />
		</PageLayout>
	);
};

export default ValuePage;
