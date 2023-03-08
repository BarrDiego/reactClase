import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../pages/Home'

import Contacto  from '../pages/Contacto'
import Login  from '../pages/Login'
import { Nosotros } from '../pages/Nosotros'

const Rutas = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar navbar_items={[{nombre:'Home',path:'/'},{nombre:'Nosotros',path:'/nosotros'},{nombre:'Contacto',path:'/contacto'},{nombre:'Login', path:'/login'}]}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rutas