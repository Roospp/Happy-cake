import React from 'react'

const Contacto = () => {
  return (
    <div className='contacto'>
      <h1 className='title-contacto'>Cuentanos, ¿en que te podemos ayudar?</h1>
      <form className='formulario'>
        <label className='label'>Correo:</label>
        <input type="email" name="email" placeholder='Escribe tu correo...' className='input-email' />
        <label className='label'>Descripcion:</label>
        <textarea name="descripcion" className='textarea' placeholder='Escribe tu descripcion...'></textarea>
      </form>
    </div>
  )
}

export default Contacto