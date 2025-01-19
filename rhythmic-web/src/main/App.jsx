import Router from "./router"
import '../styles/App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "../pages/home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Router />
      </div>
    </QueryClientProvider> 
  )
}

export default App;
