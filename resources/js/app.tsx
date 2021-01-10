import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'

const app = document.getElementById('app')

InertiaProgress.init({
  delay: 0,
  color: '#5a45ff',
})

render(
  <InertiaApp
    initialPage={JSON.parse(app?.dataset.page || '')}
    resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)}
  />,
  app
)
