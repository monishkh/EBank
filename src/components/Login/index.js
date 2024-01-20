import {useState} from 'react'
import Cookies from 'js-cookie'

import './index.css'

function Login(props) {
  const [userDetails, setUserDetails] = useState({
    user_id: '',
    pin: '',
  })
  const [errMsg, setErrMsg] = useState('')

  const {history} = props
  console.log(history)

  if (Cookies.get('jwt_token')) {
    history.replace('/')
  }

  const redirectToHome = jwt => {
    const jwtToken = jwt
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const getLogin = async () => {
    const url = 'https://apis.ccbp.in/ebank/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      redirectToHome(data.jwt_token)
    } else {
      setErrMsg(data.error_msg)
    }
  }

  function handelSubmit(e) {
    e.preventDefault()
    console.log(userDetails)
    getLogin()
    setUserDetails({
      user_id: '',
      pin: '',
    })
  }

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="lg-img"
          />
          <div className="login-card">
            <h1 className="lg-heading">Welcome Back!</h1>
            <form onSubmit={handelSubmit}>
              <div>
                <label htmlFor="userId">User ID</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter User ID"
                  id="userId"
                  value={userDetails.user_id}
                  onChange={e =>
                    setUserDetails({...userDetails, user_id: e.target.value})
                  }
                />
              </div>
              <div>
                <label htmlFor="pin">PIN</label>
                <br />
                <input
                  type="password"
                  value={userDetails.pin}
                  placeholder="Enter PIN"
                  id="pin"
                  onChange={e =>
                    setUserDetails({...userDetails, pin: e.target.value})
                  }
                />
              </div>
              <button type="submit" className="lg-btn">
                Login
              </button>
              <p className="err-msg">{errMsg && errMsg}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
