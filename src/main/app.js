import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Footer from '../componentes/template/footer'
import Logo from '../componentes/template/logo'
import Nav from '../componentes/template/nav'                         
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Home from '../componentes/home/home'
import UserCrud from '../componentes/user/userCrud'


function App () {
    return (
        <BrowserRouter>
         <div className='app'>
            <Logo />
            <Nav /> 
            <Home />
            <Routes />
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App
