import React from 'react';
import { Box } from '@chakra-ui/react';
import Button from '../util/button/Button';
import { useRouter } from 'next/navigation';
const router = useRouter;
const ButtonComp = () => {
	const router = useRouter();

	const handleBtnClik = () => {
		router.push('/contact');
	};

	return (
		<Box
			ml={{ base: '12px', xl: '15px' }}
			sx={{
				position: 'relative',
				'::before': {
					content: "'07'",
					position: 'absolute',
					top: '5px',
					color: 'primary.white',
					right: '25px',
					fontSize: '0.6em',
					opacity: '0.75',
					fontWeight: 'bold',
					lineHeight: '0.6em',
					zIndex: '10000',
					transition: 'transform 0.3s ease-in-out',
				},
			}}
		>
			<Button
				onClick={handleBtnClik}
				minH='45px'
				fontWeight='500'
				text='Reach Out'
				fontSize='1.025rem'
				bgColor='#3B005D'
				animation='scaleButton 2s infinite ease-in-out'
			/>
		</Box>
	);
};

export default ButtonComp;
