import React, { useState } from 'react'

interface HomeProps {
  name: string
}

const Home = ({ name }: HomeProps) => {
  const [list] = useState([
    {
      text: 'The route for this page is defined inside',
      code: 'start/routes.ts',
    },
    {
      text: 'You can update this page by editing',
      code: 'resources/views/welcome.edge',
    },
  ])

  return (
    <main
      style={{
        maxWidth: '680px',
      }}
      className="m-auto h-screen py-0 px-8 items-center flex justify-center"
    >
      <div>
        <h1 className="text-5xl mb-2 text-gray-800 leading-none font-bold"> It Works, {name}! </h1>
        <p className="text-2xl mb-10">
          Congratulations, you have just created your first AdonisJS app.
        </p>

        <ul>
          {list.map((item, index) => (
            <li className="mb-1 relative" key={index}>
              <span className="absolute left-0">—</span>
              <span className="pl-6">
                {item.text}{' '}
                {item.code && <code className="text-md bg-purple-100">{item.code}</code>}{' '}
              </span>
              file
            </li>
          ))}

          <li className="mb-1 relative">
            <span className="absolute left-0">—</span>
            <span className="pl-6">
              If you run into problems, you can reach us on{' '}
              <a href="https://discord.gg/vDcEjq6?">Discord</a> or the{' '}
              <a href="https://forum.adonisjs.com/">Forum</a>.
            </span>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Home
