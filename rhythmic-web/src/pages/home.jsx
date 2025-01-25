import Header from "../components/header";
import Navigation from "../components/Navigation";
import "../styles/comp-styles.css";
import useSearchData from '../state/services/queryApi'

function Home() {

  const artist = 'SteveHills';
  const key = 'data';
  const type = 'track';

  const { data, error, isLoading } = useSearchData(key, artist, type);

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
          <h1>{data}</h1>
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