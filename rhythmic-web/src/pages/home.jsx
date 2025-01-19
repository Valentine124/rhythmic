import Header from "../components/header"
import Navigation from "../components/Navigation"
import "../styles/comp-styles.css"
import { useState } from "react"

function Home() {

  const [data, setData] = useState("");

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
          <h1></h1>
        </div>
      </main>
      <aside className="aside">
        <Navigation />
      </aside>
    </div>
    </>
  )
}

export default Home;