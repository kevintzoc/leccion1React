import React from 'react'
import'./css/estilos.css'

function App() {
    //Funciones y constantes js

    const nombre = 'Kevin Eduardo Tzoc Castro'
    const saludo = 'Curso de react - Intecap'
    return (
        <>
            <h1 className='titulo'>{saludo}<br></br>{nombre}</h1>
        </>
    )
}

export default App