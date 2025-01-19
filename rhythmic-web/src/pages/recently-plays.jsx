import Header from "../components/header"
import Navigation from "../components/Navigation"

function RecentlyPlays() {
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
          <h1>Recently plays Page</h1>
        </div>
      </main>
      <aside className="aside">
        <Navigation />
      </aside>
    </div>
    </>
  )
}

export default RecentlyPlays;