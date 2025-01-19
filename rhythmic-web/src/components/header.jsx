import logo from "../assets/images/rhythmic-logo.png"
import avatar from "../assets/images/avatar.png"
import '../styles/comp-styles.css'

function Header() {
  return (
    <>
    <div className="main-header">
      <div className="logo">
        <img src={logo} width="160rem" height="60rem" alt="Logo" />
      </div>
      <div className="search-user-container">
        <div className="search-bar">
          <input type="search" placeholder="Search songs, albums, artist..." />
          <button type="button">Search</button>
        </div>
        <div className="user-profile">
          <p>Hello, <br /> Valentine</p>
          <img src={avatar} width="50rem" height="50rem" alt="User-img" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Header