import React from 'react'
import ReactShadowScroll from 'react-shadow-scroll';
 
const Regiones = ({Regiones}) => {
    return (
        <div className="container">
            <center><h1>Regiones del Perú</h1></center>
            {Regiones.map((contact) => (
              <ul class="data-list">
               <li>
                 <p class="strong">{contact.nombre_ubigeo}</p>
                 <p>194</p>
               </li>
   </ul>
            ))}
        </div>
    )
};

export default Regiones