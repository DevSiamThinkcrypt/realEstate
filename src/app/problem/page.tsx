import { Banner } from '@/components';
import ProblemSections from '@/components/about-us-page/sections/problems/ProblemSections';
import PageLayout from '@/components/layout/PageLayout';
const About = () => {
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
