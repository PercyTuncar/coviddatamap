import React from "react"
import Tweets from '../Tweets'
import Donar from '../Donar'

const Tendencia = () => (
    <>
     <div class="main-banner img-container" id="main-banner">
            <div class="ed-grid lg-grid-6">
                <div class="lg-cols-4 lg-x-2">
                <img class="main-banner__img" src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <div class="main-banner__data s-center">
                    <h2 class="t2 s-mb-0">Salud mental y fuentes confiables</h2>
                    <p> <span> </span> Si las noticias 
                    le generan ansiedad o angustia, <span>busque información solo de fuentes confiables </span>
                    y principalmente tome medidas prácticas para preparar sus planes y protegerse y proteger
                     a sus seres queridos.
                    </p>
          
                        
                    <button type="button" class="button s-to-center undefined" > Compartir </button>
                      
                </div>
               
                </div>
                
            </div>

            <div>
    
       
      </div>

        </div>
        <div className="title_rumores">
        <h3 >Evite los rumores. Siga a fuentes confiables.</h3>
        </div>
     
 <Tweets/>
 <Donar/>
 </>
)

export default Tendencia