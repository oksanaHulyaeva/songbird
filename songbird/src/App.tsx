import React from 'react'
import { Button } from '@material-ui/core';
import Data from './Data'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar
        data={Data}
      />
      <Button
        variant="contained"
        color="primary"
        className={"level-button"}>
          Next Level
      </Button>
    </div>
  )
}

export default App;
