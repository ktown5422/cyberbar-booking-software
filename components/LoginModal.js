export default function LoginModal(props) {
    return (
      <>
        <h2>Log in</h2>
        <div>
          <form
            onSubmit={(event) => {
              alert('Sign up!')
              event.preventDefault()
            }}
          >
            <input id='email' type='email' placeholder='Email address' />
            <input id='password' type='password' placeholder='Password' />
            <button>Log in</button>
          </form>
        </div>
        <p>
          Don't have an account yet?{' '}
          <a href='#' onClick={() => props.showSignup()}>
            Sign up
          </a>
        </p>
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
  