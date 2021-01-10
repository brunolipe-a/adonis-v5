import { InertiaLink, usePage } from '@inertiajs/inertia-react'
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
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

import React, { useCallback, useState } from 'react'

import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'
import PageTransition from '../components/PageTransition'
import { Inertia } from '@inertiajs/inertia'

function CreateUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = useCallback(() => {
    Inertia.post('/register', {
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
  }, [email, password, passwordConfirmation])

  return (
    <PageTransition>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Flex flexDirection="column" align="center">
              <Logo h={75} pointerEvents="none" mb={6} />
              <Heading size="lg">Create your accout</Heading>
              <Text fontSize="md">
                Already has an account?{' '}
                <Link color="teal.500" as={InertiaLink} href="/login">
                  sign in
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
                <FormControl id="pasword-confirmation">
                  <FormLabel>Password confirmation</FormLabel>
                  <Input
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                  />
                </FormControl>

                <Button colorScheme="teal" onClick={handleSubmit}>
                  Register
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </PageTransition>
  )
}

export default CreateUser
