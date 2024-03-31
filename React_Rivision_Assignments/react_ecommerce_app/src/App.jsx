import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PageRoutes from './routes/Page.routes'

function App() {

  return (
    <div className="">
      
      <Navbar />
      <PageRoutes/>
    </div>
  )
}

export default App
