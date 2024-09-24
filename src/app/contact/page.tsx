'use client';
import AnimatedInput from '@/components/contactPage/sections/InputField';
import PageLayout from '@/components/layout/PageLayout';
import { fonts } from '@/lib/config/constants';
import {
	Box,
	Button,
	Center,
	Checkbox,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import React from 'react';

const page = () => {
	return (
		<PageLayout variant='solid'>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					lg: 'repeat(2, 1fr)',
				}}
				gap='2rem'
				justifyItems='center'
				alignItems='center'
			>
				<Box my='80px' px='1rem' w={{ base: 'auto', lg: '31.5rem' }}>
					<Center>
						<Box mt='5rem'>
							<Heading
								textAlign='center'
								fontFamily={fonts.formText}
								fontSize='44px'
							>
								Let’s bring your vision to life
							</Heading>
							<Text
								textAlign='center'
								fontFamily={fonts.formSubText}
								fontSize='1.1rem'
								mt='5px'
							>
								From strategy to execution, we’ve got you covered
							</Text>
						</Box>
					</Center>
					<Box maxW='40rem' margin='0 auto' marginTop='40px'>
						{/* form */}
						<Grid
							templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
							gap={{ base: '8px', lg: '2rem' }}
						>
							<AnimatedInput inputText='First Name *' />
							<AnimatedInput inputText='Last Name *' />
						</Grid>
						<Box mt='2rem'>
							<AnimatedInput inputText='Email *' />
						</Box>
						<Box mt='2rem'>
							<AnimatedInput inputText='Phone' />
						</Box>
						<Flex gap='1rem' mt='1.8rem' alignItems='flex-start'>
							<Checkbox size='lg' />
							<Text mt='-0.4rem' color='primary.lightWhite'>
								I give consent to the processing of my personal data given in
								the contact form above as well as receiving commercial and
								marketing communications under the terms and conditions of
								Krishi Shwapno Privacy Policy.*
							</Text>
						</Flex>
						<Center mt='4rem'>
							<Button
								colorScheme='blue'
								w='140px'
								borderRadius='full'
								bgColor='yellow.300'
								_hover={{ bgColor: 'yellow.700' }}
							>
								Send
							</Button>
						</Center>
					</Box>
				</Box>
				<Box display={{ base: 'none', lg: 'block' }}>
					<Image src='./story/storyOne.png' h='100vh' />
				</Box>
			</Grid>
		</PageLayout>
	);
};

export default page;
