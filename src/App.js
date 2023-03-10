import { useState } from 'react';
import './App.css';
import { datosLogin, datosLoginInputs, datosRegistro, datosRegistroInputs } from './Components/Formulario/config';
import Formulario from './Components/Formulario/Formulario';
import Navbar from './Components/Navbar/Navbar';
import Rutas from './routes/Rutas';

function App() {

  const [showForms,setShowForms] = useState(false)

  const [showLogin,setShowLogin] = useState(false)

  const handleSubmit = (e,data) => {
    e.preventDefault();
    console.log(data)
  }

  // ################## Uplifting  ####################################

  const [enviado, setEnviado ] = useState(false);
  const [text, setText] = useState('')
  const toggleEnviado = () => setEnviado(!enviado)
  const handleSetText  = (text) => setText(text)

  // ################## Uplifting  ####################################



  return (
    <div className="">
      <Rutas/>
    </div>
  );
}

export default App;
/*
UPLIFTING
<h1>{text || 'Aca va un texto que sera tipiado desde Form'}</h1>
      <Navbar navbar_items={["Item","Home","Link","Disabled","Tomas"]}/>
      <button onClick={() => setShowForms(!showForms)}>{ showForms ? 'Ocultar' : 'Mostrar'}</button>
      <Formulario
        onSubmit={handleSubmit} 
        formTitle={ !showLogin ? 'Register' : 'Login'} 
        initialState={!showLogin ? datosRegistro : datosLogin} 
        inputs={!showLogin ? datosRegistroInputs : datosLoginInputs}
        toggleEnviado={toggleEnviado}
        handleSetText={handleSetText}
      />
      <button onClick={() => setShowLogin(!showLogin)}> 
        {!showLogin ? 'Ir a Login' : 'Ir a Registro'}
      </button>
*/