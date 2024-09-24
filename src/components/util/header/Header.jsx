'use client';
import { navLinks } from '@/constants/constants';
import {
	Box,
	Button as ChakraButton,
	Flex,
	Image,
	Link,
	ListItem,
	UnorderedList,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import DrawerExample from '../drawer/Drawer';
import Button from '../reusableComponents/button/Button';
import Navlink from '../reusableComponents/navLink/Navlink';
const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef < HTMLButtonElement > null;

	return (
		<Box
			position={'fixed'}
			top={0}
			left={0}
			w='full'
			zIndex='999'
			bg='primary.transparent'
			transition='all 0.3s ease-in-out'
			style={{ padding: '10px 0' }}
			// backgroundColor={#4545}
		>
			<Flex justifyContent={'space-between'} alignItems='center'>
				<Flex
					maxWidth={'200px'}
					h={'66px'}
					justifyContent={{ base: 'center', lg: 'flex-start' }}
					alignItems='center'
				>
					<Link>
						<Image
							w='full'
							h='auto'
							src='./logo/logoBlack.png'
							alt='Logo Image'
						/>
					</Link>
				</Flex>
				<Flex
					display={{ base: 'none', lg: 'block' }}
					justifyContent={'flex-end'}
				>
					<UnorderedList w='full' h='full' alignItems='center' display='flex'>
						{navLinks.map(item => (
							<ListItem mx={{ base: '10px', lg: '15px' }} key={item.id}>
								<Navlink label={item.label} link={item.link} text={item.text} />
							</ListItem>
						))}
						<Box
							ml='15px'
							sx={{
								position: 'relative',
								'::before': {
									content: "'06'",
									position: 'absolute',
									top: '5px',
									color: 'primary.white',
									right: '25px',
									fontSize: '0.6em',
									opacity: '0.75',
									fontWeight: 'bold',
									lineHeight: '0.6em',
									zIndex: '10000',
								},
							}}
						>
							<Button
								minH='45px'
								fontWeight='500'
								text='Donate'
								fontSize='1.025rem'
								bgColor='#D54740'
							/>
						</Box>
					</UnorderedList>
				</Flex>
				<Flex display={{ base: 'flex', lg: 'none' }} alignItems='center'>
					<ChakraButton
						onClick={onOpen}
						p='10px'
						w='40px'
						h='40px'
						variant='unstyled'
					>
						<Image w='full' h='auto' src='./icons/bar.png' />
					</ChakraButton>
				</Flex>
			</Flex>
			{/* Mobile Drawer Component */}
			<DrawerExample finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Header;
