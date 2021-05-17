import React from 'react'
import  './require.css'

class Navbar extends React.Component{
    
    render(){
        return(
            
                <div class="totalpage">
               <div class="mainclass">
                    <header class="headpart">
                            <div class="col">
                            <a href="go to docs"><li><h4 style={{color:"white"}}>Go to docs</h4></li></a>
                <a href="notification"><li style={{color:"#031525"}}><i class="fas fa-bell"></i></li></a>
                <a href="useraccount"><li><i class="fas fa-user"></i></li></a>
                            </div>
                    </header>
                </div>
                </div>
            
    )
}
}
export default Navbar