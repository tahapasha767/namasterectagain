// const heading=React.createElement("div",{
//     id:"ball"
// },"teriuhw");
// const root=ReactDOM.createRoot(document.getElementById("parent"));
// root.render(heading);

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"this is the grandchild da"),React.createElement("h2",{},"this is the grandchild da")]),React.createElement("div",{id:"child"},
[React.createElement("h1",{},"this is the grandchild da"),React.createElement("h2",{},"this is the grandchild da")])]);
const root=ReactDOM.createRoot(document.getElementById("parent"));
root.render(parent); 