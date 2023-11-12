import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { PortfolioLink } from '../components/links/Links'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="full-width">
    
      <PortfolioLink label="Home" path=""/>
      <PortfolioLink label="About Me" path=""/>
      <PortfolioLink label="My Work" path=""/>
  </nav>
  <div class="content hero">
    
    <div>
    <h1>
      Akash Gudi
      </h1>
    <h3>
      Front-end Developer
    </h3>
    </div>
  </div>
    </>
  )
}

export default App
