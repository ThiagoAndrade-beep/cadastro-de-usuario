import './nav.css'
import React from 'react'

function Nav () {
    return (
        <div className='menu-area'>
            <nav className='menu'>
                <a href='#/'>
                    <i className='fa fa-home'></i> Início
                </a>

                <a href= '#/users'>
                    <i className='fa fa-users'></i> Usuários
                </a>
            </nav>
        </div>
    )
}

export default Nav