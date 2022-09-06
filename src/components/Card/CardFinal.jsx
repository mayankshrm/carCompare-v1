
import { Card } from "./Card";


export function CardFinal({setSibling}){
    
    
    return(
        <>
        <div className="container">

        
            <div className="row">
            <div className="col-3">
                <Card />
            </div>
            <div  className="col-3">
            <Card />
            </div>
            <div className="col-3">
            <Card />
            </div>
            <div className="col-3">
            <Card />
            </div>

            </div>
            </div>
        </>
    )



}