// 'use client'
import { Banner } from '@/components';
import ProblemSections from '@/components/about-us-page/sections/problems/ProblemSections';
import PageLayout from '@/components/layout/PageLayout';
import { useGetContentsQuery } from '@/store/services/contentApi';
const About = () => {
	// const { data, isLoading, isError } = useGetContentsQuery({});
	// const problemBannarData = data?.data?.problem;
	// console.log('problem::',problemBannarData)
	return (
		<PageLayout variant='solid'>
			{/* Banner Section */}
			<Banner
				text='What Problem We Are Facing'
				imgSrc='./hero/heroOne.png'
				
			/>
			<ProblemSections />
		</PageLayout>
	);
};

export default About;
