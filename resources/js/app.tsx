import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './styles/theme'

const app = document.getElementById('app')

InertiaProgress.init({
  delay: 0,
  color: theme.colors.teal[500],
})

render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="system" />
    <ChakraProvider theme={theme} resetCSS>
      <InertiaApp
        initialPage={JSON.parse(app?.dataset.page || '')}
        resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)}
      />
    </ChakraProvider>
  </React.StrictMode>,
  app
)
