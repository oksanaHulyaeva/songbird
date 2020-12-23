import React from 'react'
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
    </div>
  )
}

export default App;
