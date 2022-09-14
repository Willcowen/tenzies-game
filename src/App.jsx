import { useState } from 'react'
import React from 'react'
import './App.css'
import Die from '../src/components/Die'

function App() {

  return (
    <main className="App">
      <div className='container'>
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
        <Die value='1' />
      </div>
    </main>
  )
}

export default App
