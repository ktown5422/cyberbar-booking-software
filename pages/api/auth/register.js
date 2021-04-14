import { User, sequelize } from '../../../model'
import Cookies from 'cookies'

const randomString = (length) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
  }

export default async (req, res) => {
    if(req.method !== 'POST'){
        res.status(405).end() //Method Not Alllowed
        return
    }
    const { email, password, passwordconfirmation } = req.body

    if (password !== passwordconfirmation) {
        res.end(
          JSON.stringify({ status: 'error', message: 'Passwords do not match' })
        )
        return
    }
    
    let user = await User.findOne({ where: { email } })

    if (!user) {
      user = await User.create({ email, password })
  
      const sessionToken = randomString(255)
      const sessionExpiration = new Date()
      sessionExpiration.setDate(sessionExpiration.getDate() + 30)
      User.update(
        {
          session_token: sessionToken,
          session_expiration: sessionExpiration,
        },
        { where: { email } }
      )

      const cookies = new Cookies(req, res)
      cookies.set('cyberbarbookingsoftware_session', sessionToken, {
        httpOnly: true, // true by default
      })

      res.end(JSON.stringify({ status: 'success', message: 'User added' }))
    } else {
      res.end(JSON.stringify({ status: 'error', message: 'User already exists' }))
    }
  }
