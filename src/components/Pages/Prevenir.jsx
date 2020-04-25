import React from "react"
import  Sintomas from '../Sintomas'
import PostShare from '../PostShare'

const Prevenir = () => (
    <>
    <div><Sintomas/></div>
<div class="ed-grid lg-grid-3" id="prevencion">
    <div class="s-cols-2 ed-grid s-grid-3 rows-gap">
        <div class="s-cols-3"> <article>
            <h2 class="t2 s-mb-0">¿Cómo prevenir el coronavirus?</h2>
            <p>
                Actualmente, no existe una vacuna para el coronavirus (COVID-19); sin 
                embargo, puedes evitar contagiarte siguiendo algunas medidas básicas de
                higiene recomendadas por la Organización Mundial de la Salud (OMS).
            </p>
                <div >
                    <h2 class="t2 s-mb-0"> Sigue estos consejos:</h2>
               </div>
            </article>
            </div>
        <div>
            <img src="https://image.freepik.com/foto-gratis/mujer-lavandose-manos-interior_23-2148480517.jpg" alt=""/>
            <p> Lávate las manos hasta el antebrazo con agua y jabón por un mínimo de 20 segundos.</p>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3987151/pexels-photo-3987151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <p> No te toques los ojos, nariz o boca si no te has desinfectado las manos primero.</p>
        </div>
        <div>
            <img src="https://image.freepik.com/foto-gratis/nina-mujer-joven-mascara-medica-esteril-protectora-su-rostro-al-aire-libre-calle-asiatica-show-palm-mano-no-detener-ninguna-senal-contaminacion-aire-virus-concepto-coronavirus-pandemico-chino-centrarse-mano_157823-196.jpg" alt=""/>
           <p>  Evita el contacto directo con personas que muestren síntomas como los del resfrío o gripe.</p></div>
        </div>
    <div><PostShare/></div>
</div>



  </>
)

export default Prevenir