import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProductContainer from '../Components/ProductContainer'
import Container from '../layout/Container'
const Productos = () => {
  const home_navbar_item = ["Home","Link","Disabled","Tomas"]
  const dropdown_list = ["XBOX","PLAY_STATION","PC"]
  return (
    <>
      <Navbar 
        navbar_items={home_navbar_item} 
        nombre_logo={'Mercado Libre'}
        search_bar={false}
        show_dropdown={true}
        dropdown_name={'Video Juegos'}
        dropdown_list={dropdown_list}
      />
      <Container dFlex>
        {/** children del container */}
        <ProductContainer/>
      </Container>
      
    </>
  )
}

export default Productos

