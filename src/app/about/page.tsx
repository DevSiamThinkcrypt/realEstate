'use client';
import { Box, Spinner } from '@chakra-ui/react';
import {
	AboutText,
	Banner,
	Impact,
	Slider,
	Story,
	TeamHeaderContainer,
	Title,
	Values,
	Vision,
	YellowText,
	Partners,
	Awards,
	ScrollIndicator,
} from '@/components';
import Team from '@/components/about-us-page/sections/team/Team';
// import { teamHeading } from '@/lib/data/aboutData';
// import { impactData } from '@/lib/data/aboutData';
import { teamData } from '@/lib/data/aboutData';
import PageLayout from '@/components/layout/PageLayout';
import { sliderDataWithoutContent } from '@/lib/data/solutionPageData';
import { useGetContentsQuery } from '@/store/services/contentApi';

const About = () => {
	const { data, isLoading, isError } = useGetContentsQuery({});
	// console.log('mydata', data?.data?.about);
	const aboutPageData = data?.data?.about;
	// const aboutPageTeamData = data?.data?.team;
	return (
		<PageLayout variant='solid'>
			{/* Banner Section */}
			<Banner bannarData={aboutPageData?.banner} />

			{/* Vission Section */}
			<Vision visonHeaderData={aboutPageData?.visionHeader} />

			{/* Values Section */}
			<Values />

			{/* About Text Section */}
			<Box bg='yellow.500' p={{ base: '60px 20px', xl: '60px 120px' }}>
				<AboutText>{aboutPageData?.aboutText}</AboutText>
			</Box>

			{/* About Story Section */}
			<Story storyData={aboutPageData?.storyData} />

			{/* Slider Section */}
			<Slider sliderData={aboutPageData?.slider} />

			{/* Slider Bottom Section */}
			<TeamHeaderContainer>
				<YellowText>{aboutPageData?.teamHeading}</YellowText>
				<Title color='primary.white'>Our Team</Title>
			</TeamHeaderContainer>

			{/* Team Section */}
			<Team data={teamData} />

			{/* Impact Section */}
			<Impact impactData={aboutPageData?.impactData} />

			{/* Partneres Section */}
			<Partners partnersImgData={aboutPageData?.partnersImg} />

			{/* Awards Section */}
			<Awards awardImgData={aboutPageData?.awardImg} />
		</PageLayout>
	);
};

export default About;
