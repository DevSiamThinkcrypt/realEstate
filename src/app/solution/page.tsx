import {
	Banner,
	ReusableBanner,
	Slider,
	SliderWithContent,
	TwoColumnText,
} from '@/components';
import PageLayout from '@/components/layout/PageLayout';
import SectionTitle from '@/components/util/sectionTitle/SectionTitle';
import {
	solutionDataOne,
	solutionDataTwo,
	solutionPageBannerData,
	solutionSliderData,
} from '@/lib/data/solutionPageData';
import { Box } from '@chakra-ui/react';
import React from 'react';

const page = () => {
	return (
		<PageLayout variant='solid'>
			{/* Hero Section */}
			<Banner text='Solution' imgSrc='./hero/heroTwo.png'  />

			<TwoColumnText data={solutionDataOne} />

			{/* Easy Step Section */}
			<Box p={{ base: '80px 20px 20px 20px', xl: '80px 120px 20px 120px' }}>
				<SectionTitle subtitle='how it works' title='Follow 4 Easy Steps' />
			</Box>
			<SliderWithContent sliderData={solutionSliderData} />

			<TwoColumnText data={solutionDataTwo} />

			{/* Banner */}
			<ReusableBanner data={solutionPageBannerData} />
		</PageLayout>
	);
};

export default page;
