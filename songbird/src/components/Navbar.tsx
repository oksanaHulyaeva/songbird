import React from 'react'
import { IData } from '../interfaces'
import '../css/index.scss'

type NavbarProps = {
  data: IData[],
}

const Navbar: React.FC<NavbarProps> = (data) => {
  const categories = data.data;
  console.log(categories);
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

export default Navbar