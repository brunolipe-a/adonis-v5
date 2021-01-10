import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'

interface HomeProps {
  name: string
  age: number
}

function Home({ name, age }: HomeProps) {
  return (
    <main className="max-w-screen-md m-auto h-screen py-0 px-10 items-center flex justify-center">
      <div>
        <h1 className="text-3xl md:text-5xl mb-2 text-gray-800 leading-none font-bold">
          It Works, {name} {age}!
        </h1>
        <p className="text-2xl mb-10">
          Congratulations, you have just created your first AdonisJS app.
        </p>

        <ul>
          <li className="mb-1 relative">
            <span className="absolute left-0">—</span>
            <span className="pl-6">
              The route for this page is defined inside{' '}
              <code className="text-md bg-purple-100">start/routes.ts</code> file
            </span>
          </li>
          <li className="mb-1 relative">
            <span className="absolute left-0">—</span>
            <span className="pl-6">
              You can update this page by editing{' '}
              <code className="text-md bg-purple-100">resources/views/welcome.edge</code> file
            </span>
          </li>

          <li className="mb-1 relative">
            <span className="absolute left-0">—</span>
            <span className="pl-6">
              If you run into problems, you can reach us on{' '}
              <InertiaLink href="/about">Discord</InertiaLink> or the{' '}
              <a href="https://forum.adonisjs.com/">Forum</a>.
            </span>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Home
