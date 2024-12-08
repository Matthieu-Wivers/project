import './App.css'
import CreateCard from './components/CreateCard'
import CreateButton from './components/CreateButton'
import BodyCardContainer from './components/BodyCardContainer'
import DataInfo from './DataInfo';
import DataAdd from './DataAdd';
import axios from 'axios'

function App() {
  const baseUrl = "https://greenvelvet.alwaysdata.net/pfc";
  
  //pas dans la vraie vie
  //b366a207033c1d613a24ba2aa52176be579c38a3 -> React Redux
  //a3d3494426a6cecffd3614d81dce6443592b6669 
  const token  = "a3d3494426a6cecffd3614d81dce6443592b6669";

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
