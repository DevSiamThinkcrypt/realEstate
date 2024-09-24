import PageLayout from '@/components/layout/PageLayout';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Spinner } from '@chakra-ui/react';

const loading = () => {
	return (
		<PageLayout variant='solid'>
			<Box w='full' h='100vh'>
				<Flex w='full' h='full' justifyContent='center' alignItems='center'>
					<Spinner />
				</Flex>
			</Box>
		</PageLayout>
	);
};

export default loading;
