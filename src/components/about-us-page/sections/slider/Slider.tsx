'use client';
import { Overlay, VisionHeadingText } from '@/components/util';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'; // If you're using Chakra UI
import { FC } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const styles = {
	buttonStyle: {
		ariaLabel: 'Previous',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		zIndex: '10',
		bg: 'rgba(0, 0, 0, 0.5)',
		color: 'white',
		borderRadius: 'full',
		p: { base: '18px', sm: '8px', md: '12px' },
		size: {
			base: 'sm', // Adjust size for small screens
			sm: 'lg',
		},
	},
};

// Custom Previous Button
const PreviousButton = ({ onClick }: { onClick?: () => void }) => {
	return (
		<IconButton
			aria-label='Previous'
			icon={<ArrowBackIcon />}
			position='absolute'
			left={{ base: '20px', sm: '50px', md: '150px', lg: '200px', xl: '245px' }}
			top='50%'
			transform='translateY(-50%)'
			zIndex='10'
			bg='rgba(0, 0, 0, 0.5)'
			color='white'
			borderRadius='full'
			onClick={onClick}
			_hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
			p={{ base: '18px', sm: '8px', md: '12px' }}
			size={{
				base: 'sm', // Adjust size for small screens
				sm: 'lg',
			}}
		/>
	);
};

// Custom Next Button
const NextButton = ({ onClick }: { onClick?: () => void }) => {
	return (
		<IconButton
			aria-label='Next'
			icon={<ArrowForwardIcon />}
			position='absolute'
			right={{
				base: '20px',
				sm: '50px',
				md: '150px',
				lg: '200px',
				xl: '245px',
			}}
			top='50%'
			transform='translateY(-50%)'
			zIndex='10'
			bg='rgba(0, 0, 0, 0.5)'
			color='white'
			borderRadius='full'
			onClick={onClick}
			_hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
			p={{ base: '18px', sm: '8px', md: '12px' }}
			size={{
				base: 'sm', // Adjust size for small screens
				sm: 'lg',
			}}
		/>
	);
};

type SliderProps = {
	sliderData: string[];
};

const Slider: FC<SliderProps> = ({ sliderData }) => {
	const settings = {
		centerMode: true,
		centerPadding: '300px',
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		slidesToShow: 1,
		infinite: true,
		speed: 1500,
		prevArrow: <PreviousButton />,
		nextArrow: <NextButton />,
		responsive: [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 1,
					centerPadding: '300px',
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					centerPadding: '250px',
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: '200px',
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '100px',
				},
			},
			{
				breakpoint: 480, // For small devices
				settings: {
					slidesToShow: 1,
					centerPadding: '0px',
				},
			},
		],
	};

	return (
		<Box overflowX='hidden' h='full' w='full'>
			<SlickSlider {...settings}>
				{sliderData?.map((item, index) => (
					<Box key={index} px='20px'>
						<Box>
							<Image
								src={item}
								alt={`slide-${index}`}
								borderRadius='md'
								boxShadow='md'
								objectFit='cover'
								w='full'
								h='full'
							/>
						</Box>
					</Box>
				))}
			</SlickSlider>
		</Box>
	);
};

export default Slider;
