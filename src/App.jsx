import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCard from './components/CreateCard'
import CreateButton from './components/CreateButton'
import CardContainer from './components/CardContainer'
import BodyCardContainer from './components/BodyCardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
      <img src='./../public/project_logo.webp' className='logo'></img>
      <CreateButton />
    </div>
      <CreateCard />
      <BodyCardContainer>
      </BodyCardContainer>
    </>
  )
}

export default App
