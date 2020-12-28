import React from 'react'
import { IData, IState } from '../interfaces'
import '../css/index.scss'
import {connect} from 'react-redux';

type NavbarProps = {
  data: IData[],
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const categories = props.data;
  return (
    <nav>
      <ul>
        {categories.map((item) => {
            return (
              <li className={"menu-list"} key = {item.id}>
                {item.category}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )

}

const mapStateToProps = (state:IState) => {
  console.log(state.level.level);
  return {
    level: state.level.level,
    score: state.score.score
  }
}

export default connect(mapStateToProps, null)(Navbar)