import { Outlet } from 'react-router-dom'
import './App.css'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
      <Outlet/>
      <SpeedInsights />
    </>
  )
}

export default App