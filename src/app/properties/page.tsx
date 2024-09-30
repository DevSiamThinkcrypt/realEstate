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
import PropertyLayout from '@/components/property/PropertyLayout';
import { propertyData } from '@/lib/data/propertyData';

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
				imgSrc='./image/property_bannar.jpg'
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

			<Box mb={{ base: '2rem', sm: '6rem' }}>
				{propertyData.map((property, index) => (
					<PropertyLayout data={property} oddOrder={index % 2 === 1} />
				))}
			</Box>
		</PageLayout>
	);
};

export default ValuePage;
