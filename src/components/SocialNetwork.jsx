import React from 'react'

class SocialNetwork extends React.Component{
    render(){
        return(
            <>
            <div class="middle">
            <a class="btn" href="">
                    <i class="fas fa-share"></i>
                </a>
                <a class="btn" href="">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn" href="">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="btn" href="">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
            </>
        )
    }
}
export default SocialNetwork;