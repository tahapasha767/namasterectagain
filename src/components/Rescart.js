import React from "react";
import ReactDOM from "react-dom/client";
const Rescart=(props)=>{
    const {data}=props;
    
   
    
    return(
        <div className="rescart">
            <img src={data.img}className="foodcart"></img>
            <div className="title">{data.name}</div>
            <div className="des">{data.cuisine_string}</div>
            <div className="rating-items">
                <div  className="rater"style={{color:"white",background:"green",buttonstyle:"none" ,width:"40px"}}>{data.rating.aggregate_rating}</div>
                <div className="time">{data.rating.votes} </div>
                <div className="offers">{data.is_new}</div>

            </div>
            <div className="atc"><span>Check it</span></div>
        </div>
    )
}
export default Rescart;