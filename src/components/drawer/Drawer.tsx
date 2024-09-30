'use client';
import { navLinks } from '@/lib/data/aboutData';
import {
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RefObject, useState } from 'react';
import Button from '../util/button/Button';
import { NavText } from '../util';
import ButtonComp from './Button';
import { sizes } from '@/lib/config/constants';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

type DrawerExampleProps = {
	finalFocusRef: RefObject<HTMLButtonElement>;
	isOpen: boolean;
	onClose: () => void;
};

const DrawerExample = ({
	finalFocusRef,
	isOpen,
	onClose,
}: DrawerExampleProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleOpenDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={onClose}
			finalFocusRef={finalFocusRef}
		>
			<DrawerOverlay />
			<DrawerContent maxW='100vw' w='100vw'>
				<DrawerCloseButton
					bg='#2D3458'
					borderRadius='50%'
					padding='20px'
					color='primary.white'
				/>
				<DrawerHeader>Menu</DrawerHeader>

				{/* You can place any additional content here, like navigation links */}
				<UnorderedList h='full'>
					{navLinks.map(item => (
						<ListItem mx={{ base: '10px', lg: '15px' }} key={item?.id}>
							<Link
								style={{ display: 'flex', justifyContent: 'space-between' }}
								href={item.link}
							>
								<NavText>{item?.text}</NavText>
							</Link>
						</ListItem>
					))}
					<ButtonComp />
				</UnorderedList>
				<Stack justifyContent='flex-end' alignItems={'center'} py='1.3rem'>
					<Text
						fontSize='0.9em'
						fontWeight='normal'
						textAlign='center'
						lineHeight='1.6'
					>
						@ All copyright 2024, krishishwapno.com
					</Text>
					<Flex justifyContent='center'>
						<Text mr='5px'>Powered by </Text>
						<Link href='https://thinkcrypt.io/'>
							<Text color='header.500' fontWeight='bold'>
								thinkcrypt.io
							</Text>
						</Link>
					</Flex>
				</Stack>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerExample;
