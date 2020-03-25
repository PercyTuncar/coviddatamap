import React from "react"
import CallRegion from "../CallRegion"
import MapPeru from './MapPeru'

const Home = () => (
    <>
    <div class="ed-container">
<div class="ed-container">
  <div class="ed-item s-30 lg-50"><MapPeru/></div>
  <div class="ed-item s-50 lg-50" id="scroll"> <CallRegion/></div>
</div>
</div>

 </>
)

export default Home