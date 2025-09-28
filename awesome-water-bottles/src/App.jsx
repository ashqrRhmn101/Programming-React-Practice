
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


const bottlesPromise = async() =>{
    const res = await fetch("/bottles.json")
    return res.json()
  }
const promiseBottles = bottlesPromise()
  // console.log(promiseBottles)
function App() {
  
  return (
    <>
    <Suspense>
      <Bottles promiseBottles={promiseBottles}/>
    </Suspense>
    </>
  )
}

export default App
