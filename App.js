import React from "react";
import ReactDOM from "react-dom/client";
// const heading=React.createElement("div",{
//     id:"ball"
// },"teriuhw");
// const root=ReactDOM.createRoot(document.getElementById("parent"));
// root.render(heading);


const Heading2=()=><div ClassName="header1" >
    <Title></Title>
    <h1>Namate JavaScript</h1>
    </div>
const heading=React.createElement("h1",{id:"heading"},"Namate Javascript");
const root=ReactDOM.createRoot(document.getElementById("parent"))

const Title=()=>{
    return (<h1>This is the Title</h1>)
}
root.render(<Heading2/>);