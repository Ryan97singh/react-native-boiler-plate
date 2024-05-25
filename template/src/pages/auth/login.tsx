import { Scaffold } from '@/components';
import { Box, Text } from '@/components/restyle';
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <Box flex={1}>
      <Scaffold>
        <Box>
          <Text>My APP</Text>
        </Box>
      </Scaffold>
    </Box>
  );
}

export default Login