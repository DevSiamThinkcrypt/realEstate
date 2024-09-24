'use client';
import Title from '@/components/util/title/Title';
import { Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import Story from '../story/Story';
import TeamHeaderContainer from '../../container/TeamContainer';
import { YellowText } from '@/components/util';
import { teamHeading } from '@/lib/data/aboutData';
import Impact from '../impact/Impact';
import { useGetContentsQuery } from '@/store/services/contentApi';

type ProblemSectionsProps = {};

const ProblemSections: FC<ProblemSectionsProps> = ({}) => {
	const { data, isLoading, isError } = useGetContentsQuery({});
	const aboutPageData = data?.data?.about;
	return (
		<>
			<Stack
				p={{ base: '20px 20px', xl: '20px 120px' }}
				alignItems='center'
				spacing={4}
			>
				<Title text='Challenges Faced by Krishi Shwapno' />
				<Text fontSize='1rem' textAlign='center'>
					Krishi Shwapno, as Bangladesh’s first technology and circular
					economy-based integrated agri supply chain platform, encounters
					several significant challenges in its quest to ensure fair prices for
					farmers and safe food for consumers. One of the foremost issues is the
					digital divide among farmers, especially in rural areas. Many farmers
					lack the technological literacy needed to effectively utilize the
					platform, making widespread adoption difficult. Bridging this gap
					requires continuous education and training initiatives, which can be
					time-consuming and resource-intensive. The agricultural supply chain
					in Bangladesh is notoriously fragmented, with multiple intermediaries
					and stakeholders involved at various stages. This fragmentation
					complicates efforts to create a cohesive system that connects farmers
					directly with marketplaces and logistics providers. As Krishi Shwapno
					operates as an aggregator, integrating these diverse parties into a
					streamlined digital platform requires overcoming coordination and
					infrastructure challenges, particularly in areas where road
					conditions, storage facilities, and transport networks are
					underdeveloped.
				</Text>
			</Stack>
			<Story storyData={aboutPageData?.storyData} />
		</>
	);
};

export default ProblemSections;
