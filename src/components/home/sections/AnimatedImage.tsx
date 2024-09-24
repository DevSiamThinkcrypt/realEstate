import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Variants for image animation based on scroll direction
const imageVariants = {
	initial: { y: '0', opacity: 1 }, // Start outside the viewport (above)
	enter: { y: 0, opacity: 1, transition: { duration: 0.8 } }, // Slide in from top
	exit: { y: '100vh', opacity: 0, transition: { duration: 0.8 } }, // Move out downward
};

interface AnimatedImageProps {
	imgSrc?: string;
	vidSrc?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ imgSrc, vidSrc }) => {
	return (
		<Box
			as={motion.div}
			flex='1'
			position='relative'
			overflow='hidden'
			height='100vh'
		>
			<motion.div
				initial='initial'
				animate='enter'
				exit='exit'
				variants={imageVariants}
				style={{ position: 'absolute', height: '100%', width: '100%' }}
			>
				{vidSrc ? (
					<video
						src={vidSrc}
						autoPlay
						muted
						loop
						playsInline
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'cover',
						}}
					/>
				) : (
					<Image
						src={imgSrc || ''}
						w='100%'
						height='100%'
						alt='Section Image'
						objectFit='cover'
					/>
				)}
			</motion.div>
		</Box>
	);
};

export default AnimatedImage;
