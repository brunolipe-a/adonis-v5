import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class RegisterController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('register')
  }

  public async store({ request, response }: HttpContextContract) {
    const { email, password } = await request.validate(RegisterValidator)

    await User.create({
      email,
      password,
    })

    return response.redirect().toRoute('login.index')
  }
}
