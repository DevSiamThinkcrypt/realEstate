'use client';
import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Icon,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FooterHeadingText } from '../about-us-page';
import { NavText } from '../util';
import { footerNavLinks } from '@/lib/data/aboutData';
import { footerContactData } from '@/lib/data/aboutData';
import { footerIconsData } from '@/lib/data/aboutData';
import CopyrightSection from './CopyrightSection';

const Footer = () => {
	return (
		<Box>
			<Box
				p={{ base: '80px 20px 80px 20px', xl: '80px 120px 80px 120px' }}
				bg='#132344'
			>
				<Grid
					h='auto'
					templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
					gap='10'
				>
					<GridItem>
						<Box>
							<FooterHeadingText text='Explore' />

							{footerNavLinks.map((item, index) => (
								<UnorderedList key={index} m={0}>
									<ListItem>
										<Link style={{ display: 'inline-block' }} href={item.link}>
											<NavText color='primary.lightWhite'>{item?.text}</NavText>
										</Link>
									</ListItem>
								</UnorderedList>
							))}
						</Box>
					</GridItem>
					{/* contact details */}
					<GridItem>
						<Box>
							<FooterHeadingText text='Contact' />

							{footerContactData.map((item, index) => (
								<UnorderedList key={index} m={0}>
									<ListItem>
										<NavText
											color='primary.lightWhite'
											maxW='24rem'
											lineHeight='2rem'
											mb='0.6rem'
										>
											{item.flat}
										</NavText>
									</ListItem>
									<ListItem>
										<NavText
											color='primary.lightWhite'
											maxW='24rem'
											lineHeight='2rem'
											mb='0.6rem'
										>
											{item.road}
										</NavText>
									</ListItem>
									<ListItem>
										<NavText
											color='primary.lightWhite'
											maxW='24rem'
											lineHeight='2rem'
											mb='0.6rem'
										>
											{item.postal}
										</NavText>
									</ListItem>
									<ListItem>
										<NavText
											color='primary.lightWhite'
											maxW='24rem'
											lineHeight='2rem'
											mb='0.6rem'
										>
											{item.tel}
										</NavText>
									</ListItem>
									<ListItem>
										<NavText
											color='primary.lightWhite'
											maxW='24rem'
											lineHeight='2rem'
											mb='0.6rem'
										>
											{item.email}
										</NavText>
									</ListItem>
								</UnorderedList>
							))}
						</Box>
					</GridItem>
					{/* Social Icons */}
					<GridItem colSpan={{ base: 1 }}>
						<Flex gap='1rem'>
							{footerIconsData.map((iconData, i) => (
								<Link target='_blank' key={i} href={iconData.link}>
									<Center
										w='3.5rem'
										h='3.5rem'
										bgColor='primary.white'
										borderRadius='50%'
										transition='all 0.35s linear'
										_hover={{
											bgColor: '#21355f',
										}}
										role='group'
									>
										<Icon
											as={iconData.icon}
											boxSize='1.6rem'
											_groupHover={{ color: '#ffffff' }}
										/>
									</Center>
								</Link>
							))}
						</Flex>
					</GridItem>
				</Grid>
			</Box>
			{/* copy right */}
			<CopyrightSection />
		</Box>
	);
};

export default Footer;
