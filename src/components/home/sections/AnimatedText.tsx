import React, { useEffect } from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { fonts } from '@/lib/config/constants';
import { MdOutlineArrowForward } from 'react-icons/md';

interface AnimatedTextProps {
	title: string;
	subTitle: string;
	btnText: string;
	color: string;
	horizontalText: string;
	isActive: boolean;
}

const staggerContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const staggerItem = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
	title,
	subTitle,
	btnText,
	color,
	horizontalText,
	isActive,
}) => {
	const controls = useAnimation();

	useEffect(() => {
		if (isActive) {
			controls.start('show');
		} else {
			controls.start('hidden');
		}
	}, [isActive, controls]);

	return (
		<Box
			as={motion.div}
			flex='1'
			padding={10}
			initial='hidden'
			animate={controls}
			variants={staggerContainer}
			display='flex'
			justifyContent='center'
			alignItems={{ base: 'start', md: 'center' }}
			flexDir='column'
			h={{ base: '50vh', md: '100vh' }}
		>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='flex-start'
				position='relative'
			>
				<Text
					transformOrigin={{ base: 'left center' }}
					left={{
						base: '40vw',
						sm: '55vw',
						md: '-40%',
						lg: '-35%',
						xl: '-50%',
						'2xl': '-70%',
					}}
					top={{ base: '155%', sm: '180%', md: '195%', lg: '195%', xl: '260%' }}
					fontSize={{
						base: '9rem',
						sm: '10rem',
						md: '14rem',
						lg: '14rem',
						xl: '16rem',
						'2xl': '18rem',
					}}
					sx={{
						transform: 'rotate(-90deg)',
						color: 'rgba(150, 144, 162, 0.13)',
						fontWeight: 'bold',
						position: 'absolute',
						bottom: '-1rem',
					}}
				>
					{horizontalText}
				</Text>

				<Text
					as={motion.text}
					maxW='25rem'
					color={color}
					lineHeight='2.4rem'
					fontFamily={fonts.heading}
					fontWeight='700'
					fontSize='2.25rem'
					mb={4}
					variants={staggerItem}
					pos='relative'
					zIndex={5}
				>
					{title}
				</Text>

				<Text
					as={motion.text}
					fontFamily={fonts.text}
					fontWeight='400'
					color={color}
					fontSize='1rem'
					mb={4}
					maxW='25rem'
					variants={staggerItem}
					pos='relative'
					zIndex={5}
				>
					{subTitle}
				</Text>

				<Link href='/'>
					<motion.div
						style={{
							fontSize: '0.95rem',
							fontWeight: 'bold',
							color: color,
							display: 'flex',
						}}
						// className='hoverEffect'
						variants={staggerItem}
					>
						<Text
							data-peer
							as={motion.text}
							pos='relative'
							zIndex={5}
							fontFamily={fonts.text}
						>
							{btnText}
						</Text>
						<Icon
							_peerHover={{
								transform: 'translateX(5px)',
								transition: 'transform 0.3s ease',
							}}
							as={MdOutlineArrowForward}
							color={color}
							boxSize={23}
						/>
					</motion.div>
				</Link>
			</Box>
		</Box>
	);
};

export default AnimatedText;
