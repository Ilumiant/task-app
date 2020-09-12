import React from 'react';
import './styles/bootstrap.min.css'
import Menu from './components/Menu'
import ListTasks from './components/ListTasks';

function App() {
  return (
    <>
      <Menu />
      <ListTasks />
    </>
  );
}

export default App;
