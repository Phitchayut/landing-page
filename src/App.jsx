import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header.jsx/Header'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

export default App
