import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavText } from '../util';
import { copyrightData } from '@/lib/data/aboutData';
import Link from 'next/link';

const CopyrightSection = () => {
	return (
		<Box py='1.6rem' bg='#0a2036'>
			<Box px={{ base: '20px', xl: '120px' }}>
				<Flex
					justifyContent='space-between'
					alignItems='center'
					flexDir={{ base: 'column', md: 'row' }}
				>
					<Box display='flex'>
						<NavText color='primary.lightWhite'>
							&copy; {copyrightData.year}
						</NavText>
						<Box display='flex' alignItems='center'>
							<NavText ml='0.6rem' color='yellow.300'>
								{copyrightData.powered}
							</NavText>
							<Link target='_black' href='https://thinkcrypt.io/'>
								<NavText ml='0.6rem' color='yellow.500'>
									{copyrightData.brand}
								</NavText>
							</Link>
						</Box>
					</Box>

					<Box display='flex' gap='0.8rem' alignItems='center'>
						<Link href='/privacy-policy'>
							<NavText color='primary.lightWhite'>Privacy Policy</NavText>
						</Link>
						<Link href='/terms-of-use'>
							<NavText color='primary.lightWhite'>Terms of Use</NavText>
						</Link>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default CopyrightSection;
