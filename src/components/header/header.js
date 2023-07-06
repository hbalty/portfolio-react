import { Component } from "react"
import './header.css'

export class HeaderComponent extends Component {

  render () {
    const menuItems = [
      {
        key: 1,
        label: 'Logo',
        type: 'logo',
        action: () => {
          console.log('Logo a été clické')
        }
      },
      {
        key: 2,
        label: 'About Us',
        type: 'menuItem',
        action: () => {
          console.log('About Us a été clické')
        }
      },
      {
        key: 3,
        label: 'Portfolio',
        type: 'menuItem',
        action: () => {
          console.log('Portfolio a été clické')
        }
      },
      {
        key: 4,
        label: 'Contact Us',
        type: 'menuItem',
        action: () => {
          console.log('Contact Us a été clické')
        }
      }
      
    ]

    const menuList = menuItems.map(
      menuItem => <li key={menuItem.key} onClick={menuItem.action}> 
        <a href="#">{menuItem.label}</a>
      </li>)
    return <div>
      <ul className="header">
        {
          menuList
        }
      </ul>
    </div>
  }
}