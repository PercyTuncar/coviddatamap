import React from 'react'


class PostShare extends React.Component{
    render(){
        return(<>
        <nav className="share">
            <ul class="feature-list"><h3>En el Perú</h3>
            
                <li id="analizados"><h4><i className="fas fa-diagnoses" ></i>   143745   </h4> Pruebas realizadas</li>
                <li id="confirmados"><h4><i className="fas fa-user-plus" ></i> 15628  </h4> Positivos </li>
                <li id="recuperados"><h4><i class="fas fa-user-check"></i>   6811 </h4> Recuperados</li>
                <li id="hospitalizados"><h4><i className="fas fa-hospital"></i>  1349  </h4> Hospitalizados</li>
                <li id="uci"><h4><i className="fas fa-procedures"></i> 167   </h4> UCI</li>
                <li id="muertos"><h4><i className="fas fa-skull-crossbones"></i> 400 </h4> Fallecidos </li>
             </ul>
       
        </nav>
         
           
              </>
        )
    }
}
export default PostShare;