import React from "react";
import "./CarData.css"

export default function CarData(props){
    return(
        <>
       <div className="pricingdiv">
	
	<ul className="theplan">
		<li className="title"> <b>{props.make}</b></li>
		
		<li style={{fontWeight: "bolder"}}><b>make: </b>{props.make}</li>
		<li style={{fontWeight: "bolder"}}><b>model: </b>{props.model}</li>
		<li style={{fontWeight: "bolder"}}><b>colour: </b>{props.colour} </li>
		<li style={{fontWeight: "bolder"}}><b>Year: </b> {props.year}</li>
		<li style={{fontWeight: "bolder"}}><b>Price: </b> {props.price}</li>
		
		
		</ul>
	
</div>

        </>
    )
}