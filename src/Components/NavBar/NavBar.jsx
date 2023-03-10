import React from 'react'
import DropDown from './DropDown'
import NavbarItem from './NavbarItem'
import SearchBar from './SearchBar'

const Navbar = (props) => {
  const { nombre_logo,navbar_items,search_bar,show_dropdown,dropdown_list,dropdown_name} = props // propiedades => abreviado 
    // Brake hasta 21 - 35hs 
    //const NavbarLogoText = "Mercado Libre";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">{nombre_logo}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          { navbar_items?.map(({nombre, path},index) => (
            <NavbarItem key={nombre} nombre_item={nombre} path ={path}/> 
          ))}
          {show_dropdown && <DropDown dropdown_name={dropdown_name} list_arr={dropdown_list}/>}
        </ul>
        {search_bar && <SearchBar/>}
      </div>
    </div>
  </nav>
  )
}

export default Navbar