
/*

Crear componente que va a mostrar 3 botones con los nombres rojo, azul, amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo

*/
import { useState } from 'react'

const Ejercicio = () => {

    const [color, setColor ] = useState('')
  
    const handleShow = (c) => {

      if (c === 'red') {
        setColor(c)
      }
      else if (c === 'blue') {
        setColor(c)
      }
      else if ( c=== 'yellow') {
        setColor(c)
      }
    }
  
    return (
      <div>
        <button onClick={() => handleShow('red')} >rojo</button>
        <br />
        <button onClick={() => handleShow('blue')} >azul</button>
        <br />
        <button onClick={() => handleShow('yellow')} >amarillo</button>
        <br />
      
      <div className="color" style={{background: color}}></div>        
    
      </div>
    )
  }
  
  export default Ejercicio