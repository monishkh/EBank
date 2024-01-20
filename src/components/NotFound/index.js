import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
        className="nt-img"
      />
      <h1 className="nf-heading">Page Not Found</h1>
      <p className="nf-caption">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
