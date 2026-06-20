import { useState } from 'react'
import { Header } from './components/header/header';
import { TaskList } from './components/tasklist/TaskList';
import { AddTask } from './components/addTask/AddTask';
import { Footer } from './components/footer/Footer';

import './App.css'

function App() {

  return (
    <>
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </>
  )
}

export default App
