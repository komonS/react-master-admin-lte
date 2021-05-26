import React, { useContext } from 'react'

import { MenuContext } from '../../store/MenuProvider'
export default function Header() {
    const { menu, setMenu } = useContext(MenuContext)
    return (
        <nav className="main-header navbar navbar-expand  navbar-dark bg-blue">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                
            </ul>
           
           
            </nav>

    )
}
