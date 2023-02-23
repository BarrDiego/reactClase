import React from 'react'
import Cart from './Cart/Cart'
import img01 from '../assets/CartImg/rick01.jpg'
import img02 from '../assets/CartImg/rick02.jpg'
import img03 from '../assets/CartImg/rick03.jpg'


const ProductContainer = () => {

  const productos = [
    {
      id:1,
      img:img01,
      titulo:'Rick Winkle',
      descripcion:'Rick Sanchez guiñando el ojo',
      temporada: 'season01'      
    },
    {
      id:2,
      img:img02,
      titulo:'Rick Smile',
      descripcion:'Rick Sanchez sonriendo',
      temporada: 'season02'
    },
    {
      id:3,
      img:img03,
      titulo:'Rick Relax',
      descripcion:'Rick Sanchez relajando',
      temporada: 'season03'
    }
    
  ]
  return (
    <>
      {productos.map(({id,img,titulo,descripcion,temporada})=>(
        <Cart 
        key={id} 
        img={img}
        title={titulo}
        descripcion = {descripcion}
        buttonName={'Mas Info'}
        buttonClassName = {temporada == 'season01' ? 'btn btn-primary' : 'btn btn-outline-success'}
        />
      ))}
      <Cart/>
    </>
  )
}

export default ProductContainer