import Header from '@/components/header/Header';
import React, { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import { Box } from '@chakra-ui/react';
import ScrollIndicator from '../scrolIndicator/ScrolIndicator';
import FollowUs from '../scrolIndicator/FollowUs';
type LayoutProps = {
	children?: ReactNode;
	variant?: 'transparent' | 'solid' | 'blur';
};

const PageLayout: FC<LayoutProps> = ({ children, variant }) => {
	return (
		<>
			<Header variant={variant || 'transparent'} />
			<Box minH={'100vh'}>{children}</Box>
			{/* Indicator Show or Hide */}
			{variant === 'solid' && <ScrollIndicator />}
			{variant === 'solid' && <Footer />}
		</>
	);
};

export default PageLayout;
