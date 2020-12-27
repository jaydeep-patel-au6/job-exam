import React from 'react'
import SocialFollow from "./SocialFollow"


const Footer = () => {
    return (
        <div>
            <div className="footer border">
               <div className="row">
                    <div className="col "><br></br>
                        
                        <p className="mt-2">34/3, 2nd floor, 1st main road, 1stBlock Koramangala,Bangluru, Karanataka - 560034</p>
                       
                    </div>
                    <div className="col">
                    <SocialFollow />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Footer