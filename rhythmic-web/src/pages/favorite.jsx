import Header from "../components/header"
import Navigation from "../components/Navigation"

function Favorite() {
  return (
    <>
    <div className="page-header-container">
      <header>
        <Header />
      </header>
    </div>
    <div className="page-body-container">
     <main className="main">
        <div>
          <h1>Favorite Page</h1>
        </div>
      </main>
      <aside className="aside">
        <Navigation />
      </aside>
    </div>
    </>
  )
}

export default Favorite;