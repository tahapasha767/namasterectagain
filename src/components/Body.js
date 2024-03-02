import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Rescart from "./Rescart";
import { dataofdummy } from "../utilities/dummydata";

let dummy=[{
  res_id: 18843699,
  img:"https://t4.ftcdn.net/jpg/05/17/27/83/360_F_517278381_npC0cMTTo14wDSQMHtbM5qI1BN0jhEpB.jpg",
  name: "The Bier Library",
  cuisine_string: "American, Pizza, European, North Indian, Bar Food, Oriental, Desserts, BBQ",
  rating: {
    has_fake_reviews: 0,
    aggregate_rating: 4.7,
    rating_text: "4.5",
    rating_subtitle: "Excellent",
    "rating_color": "3F7E00",
    votes: "13217",
    "subtext": "REVIEWS",
    "is_new": false,
  }},
  {
      res_id: 18843692,
      img:"https://www.tasteofhome.com/wp-content/uploads/2017/09/Citrus-Cranberry-Pie_EXPS_PBZ16_29181_D05_25_3b.jpg",
      name: "The American Pie",
      cuisine_string: "American, Pizza, European, North Indian, Bar Food, Oriental, Desserts, BBQ",
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: 3.0,
        rating_text: "4.5",
        rating_subtitle: "Vey Good",
        "rating_color": "3F7E00",
        votes: "132",
        "subtext": "REVIEWS",
        "is_new": false,
      }}
      ,{
          res_id: 18843699,
          img:"https://b.zmtcdn.com/data/dish_photos/8a6/f1739f80aaf5b9f7b0cd1fa2ef6998a6.jpeg",
          name: "KFC",
          cuisine_string: "American, Pizza, European, North Indian, Bar Food, Oriental, Desserts, BBQ",
          rating: {
            has_fake_reviews: 0,
            aggregate_rating: 4.5,
            rating_text: "4.5",
            rating_subtitle: "Bad",
            "rating_color": "3F7E00",
            votes: "13217",
            "subtext": "REVIEWS",
            "is_new": false,
          }}
];








const Body=()=>{
  const[lister,setlister]=useState(dataofdummy);
    return(
      

      <div className="Border">
        <div className="filter">
          <button className="filter-btn btn" onClick={()=>{
            const tempdummy=dataofdummy.filter((obj)=>obj.rating.aggregate_rating>4.5);

            console.log(tempdummy);
            setlister(tempdummy);
            
          }}>Top Rated Restaurants</button>
          <button className="ratingabove4 btn" onClick={()=>{
            const above4=dataofdummy.filter((obj)=>obj.rating.aggregate_rating>4);
            setlister(above4);
          }}>Rating above 4</button>
          
        </div>
        <div className="allcarts">
          
          
          
          
            {
                lister.map((obj)=>{
                   return <Rescart key={obj.res_id} data={obj}/>
                    

                })
            }


        </div>
        </div>
       
        
    )
}
export default Body;