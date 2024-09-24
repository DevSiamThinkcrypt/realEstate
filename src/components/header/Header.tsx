'use client';

import {
	Box,
	Button as ChakraButton,
	Flex,
	Image,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import DrawerExample from '../drawer/Drawer';
import DesktopMenu from './DesktopMenu';
import { FaBars } from 'react-icons/fa';

type HeaderProps = {
	variant?: 'transparent' | 'solid';
};

const Header: FC<HeaderProps> = ({ variant }) => {
	const [isSticky, setIsSticky] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Box
			position={'fixed'}
			top={0}
			left={0}
			w='full'
			h={{ base: '60px', xl: isSticky ? '60px' : '80px' }}
			zIndex='999'
			bg={variant === 'solid' ? 'header.500' : 'transparent'}
			color='white'
			boxShadow={isSticky ? 'lg' : 'none'}
			p={{ base: '0px 20px', xl: '0px 120px' }}
			transition='all 0.3s ease-in-out'
		>
			<Flex justifyContent={'space-between'} alignItems='center' height='100%'>
				<Flex
					maxWidth={isSticky ? '150px' : '200px'}
					h={isSticky ? '45px' : '66px'}
					justifyContent={{ base: 'center', lg: 'flex-start' }}
					alignItems='center'
				>
					<Link href='/'>
						<Image
							w='auto'
							h='95px'
							src='./logo/realLogo.png'
							alt='Logo Image'
						/>
					</Link>
				</Flex>

				<Flex
					display={{ base: 'none', lg: 'block' }}
					justifyContent={'flex-end'}
				>
					<DesktopMenu isSticky={isSticky} />
				</Flex>

				<Flex display={{ base: 'flex', lg: 'none' }} alignItems='center'>
					<ChakraButton
						onClick={onOpen}
						p='10px'
						w='40px'
						h='40px'
						variant='unstyled'
					>
						<FaBars />
					</ChakraButton>
				</Flex>
			</Flex>
			{/* Mobile Drawer Component */}
			<DrawerExample finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Header;
