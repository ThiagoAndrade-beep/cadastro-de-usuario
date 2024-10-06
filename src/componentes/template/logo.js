import './logo.css'
import logo from '../../assets/imgs/Toshiba_logo.svg.png'
import React from 'react'

function Logo () {
    return (
        <aside className='Logo'>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
        </aside>
    )
}

export default Logo