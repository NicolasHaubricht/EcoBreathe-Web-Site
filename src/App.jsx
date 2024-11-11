import { Outlet } from "react-router-dom"
import ProSideBar from './components/ProSideBar/ProSideBar'

function App() {
  return (
    <>
      <ProSideBar/>
      <Outlet/>
    </>
  )
}

export default App
