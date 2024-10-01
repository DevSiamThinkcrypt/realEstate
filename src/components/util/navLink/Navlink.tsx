import { fonts } from '@/lib/config/constants';
import { Box, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

type NavlinkProps = {
	text: string;
	link: string;
	label?: string;
	clickable?: boolean; // Add clickable prop here
};

const Navlink: React.FC<NavlinkProps> = ({
	text,
	link,
	label,
	clickable = true,
}) => {
	return clickable ? (
		// Render as a clickable Link if `clickable` is true
		<Link
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			href={link}
		>
			<Stack transition='.3s' alignItems='flex-end' gap='3px'>
				{label && (
					<Text
						fontSize='0.6em'
						opacity='0.75'
						fontWeight='bold'
						lineHeight='0.6em'
						fontFamily={fonts.text}
					>
						{label}
					</Text>
				)}
				<Text
					fontSize='1.025rem'
					fontFamily={fonts.text}
					lineHeight={1.3}
					fontWeight='500'
				>
					{text}
				</Text>
			</Stack>
		</Link>
	) : (
		// Render as a non-clickable span if `clickable` is false
		<Box
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Stack transition='.3s' alignItems='flex-end' gap='3px'>
				{label && (
					<Text
						fontSize='0.6em'
						opacity='0.75'
						fontWeight='bold'
						lineHeight='0.6em'
					>
						{label}
					</Text>
				)}
				<Text fontSize='1.025rem' lineHeight={1.3} fontWeight='500'>
					{text}
				</Text>
			</Stack>
		</Box>
	);
};

export default Navlink;
