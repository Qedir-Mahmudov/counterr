import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  CounterProvider } from './context/countercontext'
import { Counter } from './features/counter/Counter'





function App() {

/*   const { count, artim, azaltma }=useContext(Counter) */
 

  return (
    <>
     {/*  <div className="count">
        <button onClick={artim }>
         +
        </button>
         <p> {count}</p>
        <button onClick={azaltma}>
      -
        </button>
      </div> */}
     <Counter/>
     asadsdddasas
    </>
  )
}

export default App
