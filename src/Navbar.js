import React from "react";

class Navbar extends React.Component{
    
    render(){
        return(
            <>
            <div style={{width:"100%",height:60,background:"red",display:"flex",justifyContent:"space-between"}}>
                <div className="title">Movie-App</div>
                <div>
                    <img alt="cart-icon"/>
                    <span>4</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;