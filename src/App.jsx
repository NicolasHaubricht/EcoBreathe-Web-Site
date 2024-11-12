import { Outlet } from "react-router-dom"
import ProSideBar from './components/ProSideBar/ProSideBar'
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Nav/>
      <ProSideBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
