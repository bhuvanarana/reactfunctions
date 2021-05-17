import React from 'react'
import  './require.css'

class Features extends React.Component{
    
    render(){
        return(
            
                <div class="totalpage">
                <div class="mainclass">
                <div class="middlepart">
               <div class="Cards">
                            <div class="heading">More features for developers</div>
                            <div class="row Cards-row">
                                <div class="image" style={{borderRadius: "5px"}}>
                                
                                    <div class="up">
                                        <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png" alt=""/>
                                    </div>
                                    <div class="down1">
                                        <h4><b>Authentication</b></h4>
                                        <p>Authenticate and manage users</p>
                                    </div>
                                </div>
                            
                                <div class="image" style={{borderRadius: "5px"}}>
                                
                                    <div class="up">
                                        <img src="https://www.gstatic.com/mobilesdk/200429_mobilesdk/cloud_firestore2x.png" alt=""/>
                                    </div>
                                    <div class="down2">
                                        <h4><b>Cloud firestore </b></h4>
                                        <p>Realtime updates, powerful queries, and automatic scaling</p>
                                    </div>
                                </div>
                                
                                <div class="image" style={{borderRadius: "5px"}}>
                                
                                    <div class="up">
                                        <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png" alt=""/>
                                    </div>
                                    <div class="down3">
                                        <h4><b>Storage</b></h4>
                                        <p>Store and retrive user generated document</p>
                                    </div>
                                </div>
                                
                        </div>
                        <div class="link"><a href="https://console.firebase.google.com/u/0/project/dress-2f515/features/develop"><u>
                            See all Build features</u></a>
                        </div>
                            
                    </div>        
                </div>
                </div>
                </div>
            
    )
}
}
export default Features