import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCard from './components/CreateCard'
import CreateButton from './components/CreateButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateButton />
      <CreateCard />
    </>
  )
}

export default App
