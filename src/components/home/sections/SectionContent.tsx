import { Grid } from '@chakra-ui/react';
import AnimatedText from './AnimatedText';
import AnimatedImage from './AnimatedImage';

interface SectionContentProps {
	title: string;
	subTitle: string;
	btnText: string;
	imgSrc?: string;
	vidSrc?: string;
	bgColor: string;
	color: string;
	isActive: boolean;
	horizontalText: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
	title,
	subTitle,
	btnText,
	imgSrc,
	vidSrc,
	bgColor,
	color,
	isActive,
	horizontalText,
}) => {
	return (
		<Grid
			// templateColumns='5fr 6fr'
			templateColumns={{ base: '1fr', md: '5fr 6fr' }}
			height='100vh'
			bgColor={bgColor}
			position='relative'
			sx={{
				'&::after': {
					content: `''`,
					position: 'absolute',
					left: '20%',
					right: '0',
					top: '0',
					height: '21%',
					backgroundImage:
						'radial-gradient(circle at 1px 1px, #2e2c32 1px, transparent 0)',
					backgroundSize: '20px 20px',
					width: '20%',
				},
			}}
		>
			{/* Left Side: Animated Text */}
			<AnimatedText
				title={title}
				subTitle={subTitle}
				btnText={btnText}
				color={color}
				isActive={isActive}
				horizontalText={horizontalText}
			/>

			{/* Right Side: Animated Image */}
			<AnimatedImage imgSrc={imgSrc} vidSrc={vidSrc} />
		</Grid>
	);
};

export default SectionContent;

// import { Grid, Text } from '@chakra-ui/react';
// import AnimatedText from './AnimatedText';
// import AnimatedImage from './AnimatedImage';
// import './style.css';

// interface SectionContentProps {
// 	text: string[];
// 	imgSrc?: string;
// 	vidSrc?: string;
// 	bgColor: string;
// 	color: string;
// 	isActive: boolean;
// 	horizontalText: string;
// }

// const SectionContent: React.FC<SectionContentProps> = ({
// 	text,
// 	imgSrc,
// 	vidSrc,
// 	bgColor,
// 	color,
// 	isActive,
// 	horizontalText,
// }) => {
// 	return (
// 		<Grid
// 			templateColumns='5fr 6fr'
// 			height='100vh'
// 			bgColor={bgColor}
// 			className='test'
// 		>
// 			{/* Left Side: Animated Text */}
// 			<AnimatedText
// 				text={text}
// 				color={color}
// 				isActive={isActive}
// 				horizontalText={horizontalText}
// 			/>

// 			{/* Right Side: Animated Image */}
// 			<AnimatedImage imgSrc={imgSrc} vidSrc={vidSrc} />
// 		</Grid>
// 	);
// };

// export default SectionContent;
