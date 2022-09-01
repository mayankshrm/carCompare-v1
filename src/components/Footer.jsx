import React from "react";

export function Footer(){
    const date1=new Date();
   const year1=date1.getFullYear();
return(
    <>
        <div className="container-fluid bg-light">
        <h3 style={{textAlign:"center"}} >@copyright car compare {year1} </h3>

        </div>
    </>
)
}