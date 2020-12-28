import React from 'react'
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import Data from './Data'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { IState } from './interfaces'


type PropType = {
  level: number
  score: number
}

const App: React.FC<PropType> = ( props ) => {
  return (
    <div className="app">
      <Header
        props={props}      
      />
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

const mapStateToProps = (state: IState) => {
  // console.log(state.level.level);
  return {
    level: state.level.level,
    score: state.score.score
  }
}

export default connect(mapStateToProps, null)(App);
