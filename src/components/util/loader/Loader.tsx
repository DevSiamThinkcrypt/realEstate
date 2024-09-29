import { Flex, Spinner } from '@chakra-ui/react';
import React, { FC } from 'react';

type LoaderProps = {};

const Loader: FC<LoaderProps> = ({}) => {
	return (
		<Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
			<Spinner />
		</Flex>
	);
};

export default Loader;