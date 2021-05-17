import React from 'react'
import  './require.css'

class Learn extends React.Component{
    
    render(){
        return(
            
                <div class="totalpage">
                <div class="mainclass">
                <div class="middlepart">
                        <div class="header"></div>
                        <div class="learn">
                            <div class="l">Learn more</div>
                            <div class="row">
                                <div class="column">
                                    <div class="cards" style={{height: "fit-content",backgroundColor: "white", width: "300px"}}>
                                        <div class="card1">
                                                <div class="icon1">
                                                    <a href="####" style={{color: "white"}}>
                                                        <span class="fas fa-cog"></span>
                                                    </a>
                                                </div>
                                                <div class="text">
                                                    <h4>How does function work?</h4>
                                                    <h6>View the docs</h6>
                                                </div>
                                        </div>

                                        <div class="card2">
                                            <div class="icon2">
                                                <a href="####" style={{color: "white"}}>
                                                    <span class="fas fa-info-circle" style={{size: "50%"}}></span>
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4>   How does function work?</h4>
                                                <h6>View the docs</h6>
                                            </div>
                                        </div>

                                        <div class="card3">
                                            <div class="icon3">
                                                <a href="####">
                                                <span class="fas fa-smile" style={{size: "50%"}}></span>
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4>  what can functions do for me?</h4>
                                                <h6>Learn more</h6>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                                <div class="column youclass container1"  >
                                    <iframe class="responsive-iframe" width="616" height="350" src="https://www.youtube.com/embed/vr0Gfvp5v1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div><br/>
                        <hr style={{color: "black", width: "auto",fontWeight: "bold"}}/><br/>
                </div>
                </div>
                </div>
            
    )
}
}
export default Learn