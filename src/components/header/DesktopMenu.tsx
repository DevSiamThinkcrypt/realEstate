import { navLinks } from '@/lib/data/aboutData';
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { FC } from 'react';
import Navlink from '../util/navLink/Navlink';
import Link from 'next/link';
import { useState } from 'react';
import { sizes } from '@/lib/config/constants';
import { Global } from '@emotion/react';
import ButtonComp from '../drawer/Button';

type DesktopMenuProps = {
	isSticky: boolean;
};

const DesktopMenu: FC<DesktopMenuProps> = ({ isSticky }) => {
	return (
		<>
			{/* Global styles for animation */}
			<Global
				styles={`
          @keyframes scaleButton {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05); /* Reduced scale size */
            }
          }
        `}
			/>

			<UnorderedList
				w='full'
				h='full'
				transition='.3s'
				height={isSticky ? '60px' : '80px'}
				alignItems='center'
				display='flex'
				justifyContent='center'
			>
				{navLinks.map(item => (
					<ListItem
						position='relative'
						height='100%'
						display='flex'
						justifyContent='center'
						alignItems='center'
						px={{ base: '10px', lg: '15px' }}
						key={item.id}
						_hover={{
							'> div': { display: 'block' }, // Show dropdown on hover
						}}
					>
						<Navlink
							// clickable={item.clickable}
							label={item.label}
							link={item.link}
							text={item.text}
						/>
					</ListItem>
				))}

				<ButtonComp />
			</UnorderedList>
		</>
	);
};

export default DesktopMenu;
