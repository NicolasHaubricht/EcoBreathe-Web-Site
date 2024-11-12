import { Outlet } from "react-router-dom"
import ProSideBar from './components/ProSideBar/ProSideBar'
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <>
      <Nav/>
      <ProSideBar/>
      <Outlet/>
    </>
  )
}

export default App
