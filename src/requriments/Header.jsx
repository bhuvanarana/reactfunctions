import React from 'react'
import  './require.css'

class Header extends React.Component{
    
    render(){
        return(
            
                <div class="totalpage">
                  <div class="mainclass">
                       <div class="firebox container-fluid">
                          <div class="header-background row ">
                          <div class="mlclass container-fluid">
                                <div class="content">
                                    <h1 ><b>Functions</b></h1>
                                    <p style={{fontSize: "20px"}}>Run your mobile backend code without managing servers</p>
                                </div>    
                                <div class="upgrade">
                                <i class="fas fa-info-circle"></i><h5>To use Functions, upgrade your project's billing plan</h5>
                                </div>
                          </div>
                            
                          </div>
                       </div>
                   </div>
                </div>
    )
}
}
export default Header