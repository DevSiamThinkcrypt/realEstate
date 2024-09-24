import { Banner } from '@/components';
import PageLayout from '@/components/layout/PageLayout';
import PrivacySection from '@/components/util/privacySection/PrivacySection';
import PrivacySectionPoints from '@/components/util/privacySection/PrivacySectionPoints';
import {
	privacyCollect,
	privacySectionOne,
	privacySectionTwo,
	privacyWeShare,
	privacyWeUse,
} from '@/lib/data/privacyPolity';
import { Box } from '@chakra-ui/react';
import React from 'react';

const page = () => {
	return (
		<PageLayout variant='solid'>
			{/* Here Section */}
			<Banner text='Privacy Policy' imgSrc='./banner/banner.jpg' />

			<Box
				p={{ base: '80px 20px 80px 20px', xl: '80px 120px 80px 120px' }}
				bg='primary.white'
			>
				<PrivacySection data={privacySectionOne} />

				{/* Introduction Section */}
				<PrivacySection data={privacySectionTwo} />

				<PrivacySectionPoints data={privacyCollect} />

				<PrivacySectionPoints data={privacyWeUse} />

				<PrivacySectionPoints data={privacyWeShare} />
			</Box>
		</PageLayout>
	);
};

export default page;
