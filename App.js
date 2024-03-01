import React from "react";
import ReactDOM from "react-dom/client";
// const heading=React.createElement("div",{
//     id:"ball"
// },"teriuhw");
// const root=ReactDOM.createRoot(document.getElementById("parent"));
// root.render(heading);

//componenet composition 
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" className="logopic"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart image</li>
                </ul>
            </div>
        </div>
    )
}
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
const dataofdummy=[{
    res_id: 18843699,
    img:"https://t4.ftcdn.net/jpg/05/17/27/83/360_F_517278381_npC0cMTTo14wDSQMHtbM5qI1BN0jhEpB.jpg",
    name: "The Bier Library",
    cuisine_string: "American, Pizza, European, North Indian, Bar Food, Oriental, Desserts, BBQ",
    rating: {
      has_fake_reviews: 0,
      "aggregate_rating": "4.5",
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
          "aggregate_rating": "4.7",
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
              "aggregate_rating": "4.5",
              rating_text: "4.5",
              rating_subtitle: "Bad",
              "rating_color": "3F7E00",
              votes: "13217",
              "subtext": "REVIEWS",
              "is_new": false,
            }},{
                res_id: 18843699,
                name: "McDonalds",
                img:"https://content.jdmagicbox.com/comp/bangalore/w4/080p1220510904m4g7w4/catalogue/mcdonald-s-family-restaurant-indiranagar-bangalore-fast-food-restaurants-c96qe.jpg",
                cuisine_string: "American, Pizza, European, North Indian, Bar Food, Oriental, Desserts, BBQ",
                rating: {
                  has_fake_reviews: 0,
                  "aggregate_rating": "4.5",
                  rating_text: "4.5",
                  rating_subtitle: "Excellent",
                  "rating_color": "3F7E00",
                  votes: "13217",
                  "subtext": "REVIEWS",
                  "is_new": false,
                }}
];
    
const Body=()=>{
    return(
        <div className="allcarts">
          
          
            {
                dataofdummy.map((obj)=>{
                   return <Rescart key={obj.res_id} data={obj}/>
                    

                })
            }


        </div>
        
    )
}

    
const Applayout=()=>{
    return(
        <div className="App">
            <Header/>
            <Body/>

        </div>

    )
}

    const root=ReactDOM.createRoot(document.getElementById("parent"))
    root.render(<Applayout/>);


