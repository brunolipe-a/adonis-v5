import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import { Flex, Heading, ListItem, Text, UnorderedList, chakra, Code } from '@chakra-ui/react'
import PageTransition from '../components/PageTransition'

interface HomeProps {
  name: string
  age: number
}

function Home({ name, age }: HomeProps) {
  return (
    <PageTransition>
      <Flex as="main" maxW={768} m="auto" h="100vh" py={0} px={10} align="center" justify="center">
        <div>
          <Heading as="h1" size="2xl" mb={2}>
            It Works, {name} {age}!
          </Heading>
          <Text fontSize="2xl" mb={10}>
            Congratulations, you have just created your first AdonisJS app.
          </Text>

          <UnorderedList spacing={1} listStyleType="none">
            <ListItem pos="relative">
              <chakra.span pos="absolute" left={0}>
                —
              </chakra.span>
              <chakra.span pl={6}>
                The route for this page is defined inside{' '}
                <Code colorScheme="teal">start/routes.ts</Code> file
              </chakra.span>
            </ListItem>
            <ListItem pos="relative">
              <chakra.span pos="absolute" left={0}>
                —
              </chakra.span>
              <chakra.span pl={6}>
                You can update this page by editing{' '}
                <Code colorScheme="teal">resources/views/welcome.edge</Code> file
              </chakra.span>
            </ListItem>

            <ListItem pos="relative">
              <chakra.span pos="absolute" left={0}>
                —
              </chakra.span>
              <chakra.span pl={6}>
                If you run into problems, you can reach us on{' '}
                <InertiaLink href="/about">Discord</InertiaLink> or the{' '}
                <a href="https://forum.adonisjs.com/">Forum</a>.
              </chakra.span>
            </ListItem>
          </UnorderedList>
        </div>
      </Flex>
    </PageTransition>
  )
}

export default Home
