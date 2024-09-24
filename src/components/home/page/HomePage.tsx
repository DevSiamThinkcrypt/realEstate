'use client';
import SwiperContainer from '@/components/home/sections/SwiperContainer';
import PageLayout from '@/components/layout/PageLayout';
import { sections } from '@/lib/data/sectionData';
import React from 'react';

const Homepage: React.FC = () => {




	return (
		<PageLayout>
			<SwiperContainer bannerDataArray={sections} />
		</PageLayout>
	);
};

export default Homepage;
