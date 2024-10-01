import { fonts } from '@/lib/config/constants';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';
import { FC, useState } from 'react';

type inputTextType = {
	inputText: string;
};

const AnimatedInput: FC<inputTextType> = ({ inputText }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [hasValue, setHasValue] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(false);
		setHasValue(!!e.target.value);
	};

	return (
		<FormControl position='relative' mt={6}>
			<FormLabel
				position='absolute'
				fontFamily={fonts.text}
				top={isFocused || hasValue ? '-0.5rem' : '50%'}
				left={isFocused || hasValue ? '0.25rem' : '0.15rem'}
				fontSize={isFocused || hasValue ? '0.85rem' : '1rem'}
				transition='all 0.3s ease'
				transform='translateY(-50%)'
				color={isFocused ? '#1d315e' : 'gray.500'}
				pointerEvents='none'
			>
				{inputText}
			</FormLabel>
			<Input
			fontFamily={fonts.text}
				variant='flushed'
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={e => setHasValue(!!e.target.value)}
				focusBorderColor='#1d315e'
				borderColor='gray.500'
			/>
		</FormControl>
	);
};

export default AnimatedInput;
