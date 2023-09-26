'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@concepta/react-auth-provider';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const router = useRouter();
  const { accessToken } = useAuth();

  useEffect(() => {
    router.replace(accessToken ? '/showroom/home' : '/login');
  }, []);

  return (
    <main>
      <Box display="flex" flex={1} justifyContent="center" pt="30vh">
        <CircularProgress />
      </Box>
    </main>
  );
};

export default Home;
