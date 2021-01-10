import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('login')
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)

    await auth.attempt(email, password)

    return response.redirect().toRoute('home')
  }
}
