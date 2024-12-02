import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCard from './components/CreateCard'
import CreateButton from './components/CreateButton'
import Card from './components/Card'
import CardContainer from './components/CardContainer'
import BodyCardContainer from './components/BodyCardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateButton />
      <CreateCard />
      <BodyCardContainer>
      </BodyCardContainer>
    </>
  )
}

export default App
