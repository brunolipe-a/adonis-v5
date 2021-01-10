import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'

function About() {
  return (
    <main className="max-w-screen-md m-auto h-screen py-0 px-10 items-center flex justify-center">
      <div>
        <h1 className="text-3xl md:text-5xl mb-2 text-gray-800 leading-none font-bold">About!</h1>
        <p className="text-2xl mb-10">
          Congratulations, you have just created your first AdonisJS app.
          <InertiaLink href="/">Discord</InertiaLink>
        </p>
      </div>
    </main>
  )
}

export default About
