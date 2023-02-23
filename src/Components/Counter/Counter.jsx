import React, {useState} from 'react'
import Button from '../../shared/Button'

const Counter = (props) => {

    const {initialNumber = 0, initialName = 'Rick'} = props;
    const [contador, setContador] = useState(initialNumber);
    const [nombre, setNombre] = useState(initialName);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);
    const cambiarNombre = () => {setNombre("Sanchez")};
    const volverInitial = ()=> {setNombre(initialName)};

  return (
    <div className='d-flex justify-content-around'>
        <Button onClick={sumar} buttonText='sumar'/>
        <h1>Nombre: {nombre}</h1>
        <Button  onClick={cambiarNombre} buttonText='Ver Apellido'/>
        <h1>Contador : {contador}</h1>
        <Button onClick={restar} buttonText='restar'/>
    </div>
  )
}

export default Counter