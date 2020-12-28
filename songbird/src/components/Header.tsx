import React from 'react'
// import {connect} from 'react-redux';
// import { IState } from '../interfaces'
import '../css/index.scss'

type PropsType = {
  level: number
  score: number
}

const Header:React.FC<PropsType> = ( props ) => {
  return (
    <header>
      <h1 className="logo">SongBird</h1>
      <div className="score-container">Score:  {props.score}</div>
    </header>
  )
}


export default Header;