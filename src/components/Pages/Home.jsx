import React from "react"
import PostShare from "../PostShare"
import MapPeru from './MapPeru'
import ButtonDonar from '../ButtonDonar'
import Donar from '../Donar'
const Home = () => (
    <>


    <div class="ed-container">
<div class="ed-container">
  <div class="ed-item s-30 lg-75"><MapPeru/></div>
  <div class="s-75 m-50 lg-40 s-to-left m-to-center l-to-right" id="share"> <PostShare/> </div>
</div>
</div>



<Donar/>

 </>
)

export default Home