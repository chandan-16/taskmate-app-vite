import { useState } from 'react'
import { Header } from './components/header/header';
import { TaskList } from './components/tasklist/TaskList';

import './App.css'

function App() {

  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}

export default App
