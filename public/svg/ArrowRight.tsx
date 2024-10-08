import React from 'react';

interface ArrowRightProp {
	color: string;
}

const ArrowRight: React.FC<ArrowRightProp> = ({ color }) => {
	return (
		<svg
			width={16}
			height={16}
			viewBox='0 0 16 16'
			xmlns='http://www.w3.org/2000/svg'
			className={`fill:${color}`}
		>
			<path d='M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z' />
		</svg>
	);
};

export default ArrowRight;
