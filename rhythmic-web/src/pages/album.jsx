import Header from "../components/header"
import Navigation from "../components/Navigation"

function Album() {
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
          <h1>Album Page</h1>
        </div>
      </main>
      <aside className="aside">
        <Navigation />
      </aside>
    </div>
    </>
  )
}

export default Album;