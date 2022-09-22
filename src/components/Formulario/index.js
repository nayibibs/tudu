import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import "./style.css"

const Formulario = (props) => {
  /**
   * Statless
   * Stateful
   * 
   * formularios controlados
   * 1- Crear un estado(useState)
   * 2- Vincular el input con el estado --> value
   * 3- Manejar el evento onChange
   *  3.1- generamos una funcion que reciba el evento
   *  3.2- vincular el onChange del input con el 3.1
   *  3.3- Debemos actualizar el estado accediendo al evento.target.value y usando la funcionque actualiza el estado
   * 4- Cuando tenemos controlados todos los inputs vamos a manejar el envento onSubmit del form
   * 4.1- Generamos una funcion que reciba el evento
   * 4.3- prevenir el comportamiento por defecto - evento.preventDefault()
   */

  const[titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")

  function manejaCambio(evento){
    setTitulo(evento.target.value)
  }

  function manejaDescripcion(evento){
    setDescripcion(evento.target.value)
  }

  function enviarDatos(evento){
    
    evento.preventDefault()
    
    props.envioDeTarea(
      {
        titulo: titulo,
        descripcion:descripcion,
        completada: false,
      })
    
    setTitulo("")
    setDescripcion("")
    //fetch
    //fetch("url", {method: "POST"})
    //.then(respuesta =>{})
  }

  return (
    <form className='Formulario' onSubmit={enviarDatos}>
    <h2>Agrega tu tarea</h2>
    <input placeholder="Ingresa el titulo" value={titulo} onChange={manejaCambio}/>
    <input placeholder="Ingresa tu descripcion" value={descripcion} onChange={manejaDescripcion} />
    <Button variant='primary' type="submit">Agregar</Button>
    </form>
  )
}

export default Formulario