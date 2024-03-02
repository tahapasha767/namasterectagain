import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// const heading=React.createElement("div",{
//     id:"ball"
// },"teriuhw");
// const root=ReactDOM.createRoot(document.getElementById("parent"));
// root.render(heading);

//componenet composition 






    
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


