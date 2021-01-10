/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.get('/healthz', async () => {
  return HealthCheck.getReport()
})

Route.group(() => {
  Route.get('/', async ({ inertia, auth }) => {
    const { email } = auth.user as User

    const username = email.split('@')[0]

    return inertia.render('home', { email: username })
  }).as('home')
})
  .middleware('auth')
  .prefix('app')

Route.resource('login', 'LoginController').only(['index', 'store'])
Route.resource('register', 'RegisterController').only(['index', 'store'])
