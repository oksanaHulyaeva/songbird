import React from 'react'
import '../css/index.scss'

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="logo">SongBird</h1>
      <div className="score-container">Score:  </div>
    </header>
  )
}

export default Header