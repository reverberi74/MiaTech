import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../pages/Footer"

const PubblicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-render-box">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default PubblicLayout
