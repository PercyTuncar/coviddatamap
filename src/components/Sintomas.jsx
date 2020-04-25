import React, {Component} from 'react'
import Modal from "./Modal/Modal"



class Sintomas extends Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    render(){
    return (
        <>
        <div class="main-banner img-container" id="main-banner">
            <div class="ed-grid lg-grid-6">
                <div class="lg-cols-4 lg-x-2">
                <img class="main-banner__img" src="https://images.pexels.com/photos/3983428/pexels-photo-3983428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <div class="main-banner__data s-center">
                    <h2 class="t2 s-mb-0">Los sintomas del coronavirus</h2>
                    <p> El <span> COVID-19 se caracteriza por síntomas leves,</span>  como, dolor 
                        de garganta, tos y fiebre. La enfermedad puede ser más grave 
                        en algunas personas y provocar neumonía o dificultades respiratorias.
                    </p>
                    <p> Más raramente puede ser mortal.  <span> Las personas de edad avanzada y las 
                        personas con otras afecciones médicas  </span>  (como asma, diabetes o cardiopatías) 
                        pueden ser más vulnerables y enfermar de gravedad.
                    </p>
          
                        
                    <button type="button" class="button s-to-center undefined" onClick={e => {
                            this.showModal();
                                 }}> Compartir </button>
                      
                </div>
               
                </div>
                
            </div>

            <div>
    
       
      </div>

        </div>
  <div className="modalContainer">
    <div className="modaldos">
        <Modal onClose={this.showModal} show={this.state.show}>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://perucovid.com" target="_blank">Comparte en Facebook</a>
                <a href="https://twitter.com/intent/tweet?text= escola%20inform%C3%A1tica%20i%20disseny&url=https://perucovid.com&hashtags=YoMeQuedoEnCasa" target="_blank"> Compartir en twitter</a>
                <a href="https://api.whatsapp.com/send?text=escola%20inform%C3%A1tica%20i%20disseny%20https://perucovid.com" target="_blank">Compartir en Whatsapp</a>
            </Modal>
        </div>
  </div>
        </>   
          );
        }
    }
    
    
    export default Sintomas;