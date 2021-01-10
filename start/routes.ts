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

Route.get('/healthz', async () => {
  return HealthCheck.getReport()
})

Route.get('/', ({ inertia }) => {
  const data = {
    name: 'Bruno',
    age: 19,
  }

  return inertia.render('home', { ...data })
})

Route.get('/about', ({ inertia }) => {
  return inertia.render('about')
})
