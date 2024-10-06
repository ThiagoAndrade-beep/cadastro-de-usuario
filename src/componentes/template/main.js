import Header from './header'
import './main.css'
import React from 'react'

function Main (props) {
    return (
        <React.Fragment>
            <Header {...props}/> {/* Isso quer dizer que as propriedades que recebi no main estão indo pro header*/}
            <main className='content container-fluid'>
                <div className='p-3 mt-3'>
                    {props.children}
                </div>
            </main>     
        </React.Fragment>
    )
}

export default Main