import './App.css'
import FirstPage from './components/first-page/FirstPage'
import SecondPage from './components/second-page/SecondPage'
import { useState } from 'react'
function App() {

const [isPlaying,setIsPlaying] = useState(false);

 const toggleButton = () => {
   setIsPlaying((prev) => !prev);
 };
  return (
    <>
      {isPlaying ? <SecondPage /> : <FirstPage toggle ={toggleButton} />}
    </>
  )
}

export default App
