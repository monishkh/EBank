import Cookies from 'js-cookie'

import './index.css'

function Home(props) {
  const {history} = props

  const jwt = Cookies.get('jwt_token')
  console.log('mk', jwt)

  if (jwt === undefined) {
    history.replace('/ebank/login')
  }

  const logoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <>
      <div className="home-page">
        {/* header container */}
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <button
            type="button"
            className="login-btn"
            onClick={() => logoutBtn()}
          >
            Logout
          </button>
        </div>
        {/* card container */}
        <div className="card-container">
          <h1 className="main-heading">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="digi-card"
          />
        </div>
      </div>
    </>
  )
}

export default Home
