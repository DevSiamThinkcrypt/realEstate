'use client';
import { Box, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false); // State to control visibility

	const handleScroll = () => {
		const scrollTop = window.scrollY; // Get the current scroll position
		const windowHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / windowHeight) * 100;

		setScrollProgress(scrollPercent); // Set the scroll progress based on scroll

		// Toggle visibility after scrolling down 800px
		if (scrollTop > 800) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Stack
			position='fixed'
			left='0px' // Adjust the position as per your layout
			top='50%'
			alignItems='center'
			zIndex={99}
			opacity={isVisible ? 1 : 0} // Control opacity based on visibility
			transition='opacity 0.5s ease-in-out' // Add transition for fade effect
			transform='translateY(-50%)' // Center vertically
		>
			<Text
				onClick={scrollToTop}
				fontWeight='700'
				color='primary.black'
				transform='rotate(-90deg)'
				cursor='pointer'
			>
				Scroll to top
			</Text>
			<Box
				w='2px' // Set the width to 2px
				h='50px' // Set the height to 50px
				bg='gray.300' // Background of the bar
				borderRadius='full'
				overflow='hidden'
				mt='40px'
			>
				{/* The actual progress indicator */}
				<Box
					width='100%'
					height={`${scrollProgress}%`} // Height based on scroll progress
					bg='primary.black' // Fill color for the progress
					transition='height 0.2s ease-out'
				/>
			</Box>
		</Stack>
	);
};

export default ScrollIndicator;
