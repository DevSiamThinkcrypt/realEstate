'use client';
import { Overlay, VisionHeadingText } from '@/components/util';
import { fonts } from '@/lib/config/constants';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	Icon,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react'; // If you're using Chakra UI
import Link from 'next/link';
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

type SliderWithContent = {
	sliderData: {
		imgSrc: string;
		content?: {
			heading: string;
			para: string;
		};
		buttonText?: string;
		buttonIcon?: any;
	}[];
};

const SliderWithContent: FC<SliderWithContent> = ({ sliderData }) => {
	
	const settings = {
		centerMode: true,
		centerPadding: '300px',
		autoplay: true,
		autoplaySpeed: 3000,
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
				{sliderData.map((item, index) => (
					<Box key={index} px='20px'>
						<Box position={item?.content && 'relative'} height='80vh'>
							<Image
								src={item?.imgSrc}
								alt={`slide-${index}`}
								borderRadius='md'
								boxShadow='md'
								objectFit='cover'
								w='full'
								h='full'
							/>
							{/* {item.content && <Overlay />} */}
							{item?.content && <Overlay />}

							{item?.content && (
								<Box
									zIndex={'888'}
									position='absolute'
									bottom='5rem'
									left='2rem'
								>
									<VisionHeadingText
										fontSize={{ base: '1.5rem', lg: '2.5rem' }}
										color='primary.white'
									>
										{item?.content?.heading}
									</VisionHeadingText>
									<Text
										fontFamily={fonts.text}
										fontSize={{ base: '1rem', lg: '1.5rem' }}
										color='primary.white'
										maxW={{ base: '60rem' }}
									>
										{item?.content?.para}
									</Text>
									<Link href='#'>
										<Flex
											alignItems='center'
											color='white'
											gap='0.4rem'
											mt='10px'
										>
											<Text data-peer fontFamily={fonts.text}>
												{item?.buttonText}
											</Text>
											<Icon
												_peerHover={{
													transform: 'translateX(5px)',
													transition: 'transform 0.3s ease',
												}}
												as={item?.buttonIcon}
											/>
										</Flex>
									</Link>
								</Box>
							)}

							
						</Box>
					</Box>
				))}
			</SlickSlider>
		</Box>
	);
};

export default SliderWithContent;
