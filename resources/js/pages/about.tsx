import { InertiaLink } from '@inertiajs/inertia-react'
import { Box, Grid, VStack, Text, Code, Link } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'

function About() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            as={InertiaLink}
            color="teal.500"
            href="/"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </Link>
        </VStack>
      </Grid>
    </Box>
  )
}

export default About
