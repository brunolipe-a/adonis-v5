import { InertiaLink } from '@inertiajs/inertia-react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Link,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

import React, { useCallback, useState } from 'react'

import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'
import PageTransition from '../components/PageTransition'
import { Inertia } from '@inertiajs/inertia'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = useCallback(() => {
    Inertia.post('/login', {
      email,
      password,
    })
  }, [email, password])

  return (
    <PageTransition>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Flex flexDirection="column" align="center">
              <Logo h={75} pointerEvents="none" mb={6} />
              <Heading size="lg">Sign in to your account</Heading>
              <Text fontSize="md">
                Or{' '}
                <Link color="teal.500" as={InertiaLink} href="/register">
                  create a new account
                </Link>
              </Text>
            </Flex>
            <Box
              boxShadow="base"
              p={8}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="md"
            >
              <VStack spacing={6} alignItems="stretch">
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </FormControl>
                <FormControl id="pasword">
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormControl>
                <Flex justifyContent="space-between">
                  <Checkbox colorScheme="teal">
                    <Text>Remember me</Text>
                  </Checkbox>
                  <Link
                    as={InertiaLink}
                    color="teal.500"
                    fontSize="sm"
                    fontWeight="bold"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </Flex>
                <Button colorScheme="teal" onClick={handleSubmit}>
                  Sign in
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </PageTransition>
  )
}

export default Login
