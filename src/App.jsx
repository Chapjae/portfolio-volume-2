import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Navbar />
    <div className="container"></div>
    <main className="mx-3">
      <Outlet/>
    </main>
    <div className="container"></div>
    <Footer/>
    </>
  )
}

export default App
