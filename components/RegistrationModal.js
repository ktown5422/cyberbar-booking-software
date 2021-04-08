import { useState } from 'react'
import axios from 'axios'

export default function RegistrationModal(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordconfirmation, setPasswordconfirmation] = useState('')

    const submit = async () => {
      const response = await axios.post('/api/auth/register', {
        email,
        password,
        passwordconfirmation,
      })
      console.log(response)
    }

    return (
      <>
        <h2>Sign up</h2>
        <div>
          <form
            onSubmit={(event) => {
              submit()
              event.preventDefault()
            }}
          >
            <input id='email' type='email' placeholder='Email address' onChange={(event) => setEmail(event.target.value)} />
            <input id='password' type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
            <input
              id='passwordconfirmation'
              type='password'
              placeholder='Enter password again'
              onChange={(event) => setPasswordconfirmation(event.target.value)}
            />
            <button>Sign up</button>
          </form>
        
        <p>
          Already have an account?{' '}
          <a href='#' onClick={() => props.showLogin()}>
            Log in
          </a>
        </p>
        </div>
        <style jsx>{`
                    button {
                        background-color: rgb(0, 0, 204);
                        color: white;
                        font-size: 13px;
                        width: 100%;
                        border: none;
                        height: 40px;
                        border-radius: 4px;
                        cursor: pointer;
                        }
                        
                        input[type='text'],
                        input[type='email'],
                        input[type='password'] {
                        display: block;
                        padding: 10px;
                        font-size: 20px !important;
                        width: 100%;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        box-sizing: border-box;
                        margin-bottom: 10px;
                        }
                `}</style>
      </>
    )
  }
  
          
  