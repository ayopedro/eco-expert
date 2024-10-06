'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { theme } from './utils/theme';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <ToastContainer position='top-right' />
    </ChakraProvider>
  );
};

export default Provider;
