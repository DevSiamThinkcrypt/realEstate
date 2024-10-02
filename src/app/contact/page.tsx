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
	useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const page = () => {
	const toast = useToast();

	// State to store form values
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		consent: false,
	});

	// Handle change for input fields
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	// Handle consent checkbox change
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValues, consent: e.target.checked });
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Perform validation here if necessary
		if (!formValues.consent) {
			toast({
				title: 'Consent required',
				description: 'Please give consent to proceed.',
				status: 'warning',
				duration: 4000,
				isClosable: true,
			});
			return;
		}

		// Log the form data (for now, you can use this to send it to the backend)
		console.log('Form submitted:', formValues);

		// clear the form after submission
		setFormValues({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			consent: false,
		});
	};
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
								fontFamily={fonts.heading}
								fontSize={{ base: '2.5rem', md: '3.5rem' }}
							>
								Let’s bring your vision to life
							</Heading>
							<Text
								textAlign='center'
								fontFamily={fonts.text}
								fontSize='1.1rem'
								mt='5px'
							>
								From strategy to execution, we’ve got you covered
							</Text>
						</Box>
					</Center>
					<Box maxW='40rem' margin='0 auto' marginTop='40px'>
						{/* form */}
						<form onSubmit={handleSubmit}>
							<Grid
								templateColumns={{
									base: 'repeat(1, 1fr)',
									lg: 'repeat(2, 1fr)',
								}}
								gap={{ base: '8px', lg: '2rem' }}
							>
								<AnimatedInput
									inputText='First Name *'
									name='firstName'
									value={formValues?.firstName}
									onChange={handleChange}
								/>
								<AnimatedInput
									inputText='Last Name *'
									name='lastName'
									value={formValues?.lastName}
									onChange={handleChange}
								/>
							</Grid>
							<Box mt='2rem'>
								<AnimatedInput
									inputText='Email *'
									name='email'
									value={formValues?.email}
									onChange={handleChange}
								/>
							</Box>
							<Box mt='2rem'>
								<AnimatedInput
									inputText='Phone'
									name='phone'
									value={formValues?.phone}
									onChange={handleChange}
								/>
							</Box>
							<Flex gap='1rem' mt='1.8rem' alignItems='flex-start'>
								<Checkbox
									size='lg'
									isChecked={formValues.consent}
									onChange={handleCheckboxChange}
								/>
								<Text
									fontFamily={fonts.text}
									mt='-0.4rem'
									color='primary.lightWhite'
								>
									I give consent to the processing of my personal data given in
									the contact form above as well as receiving commercial and
									marketing communications under the terms and conditions of our
									Privacy Policy.*
								</Text>
							</Flex>
							<Center mt='4rem'>
								<Button
									fontFamily={fonts.text}
									w='140px'
									color='white'
									borderRadius='full'
									bgColor='#132344'
									_hover={{ bgColor: '#1d315e' }}
									type='submit'
								>
									Send
								</Button>
							</Center>
						</form>
					</Box>
				</Box>
				<Box display={{ base: 'none', lg: 'block' }}>
					<Image src='./image/contact.jpg' h='100vh' />
				</Box>
			</Grid>
		</PageLayout>
	);
};

export default page;
