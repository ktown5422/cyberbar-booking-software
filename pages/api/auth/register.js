import { User } from '../../../model'


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
      

    const user = await User.create({ email, password })
    res.end(JSON.stringify({ status: 'success', message: 'User added' }))
}
