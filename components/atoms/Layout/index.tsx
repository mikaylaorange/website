import { Flex } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
	return (
		<Flex flexGrow={1} h="100vh" bg="brand.black" pos="relative">
			{children}
		</Flex>
	);
}
