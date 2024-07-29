import React from "react";
import ReactDOM from "react-dom";
// const heading =React.createElement("h1",{id:"heading"},"hello world");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

// if you want to create a structure like this using React
// <div id="parent">
//     <div id="child">
//         <h1>this is my h1 tag</h1>
//     </div>
// </div>
// then

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"this is the h1 tag")));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//if multiple tags are their in the child class like this
// <div id="parent">
//     <div id="child">
//         <h1>this is my h1 tag</h1>
//         <h2>this is my h2 tag</h2>
//     </div>
// </div>
// then
//you have to create an array for this like this
// const parent = React.createElement(
//   "div",
//   { id:"parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "this is my h1 tag"),
//     React.createElement("h2", {}, "this is my h2 tag"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

// JSX (transpiled before it reaches to the js engine this work is done by babel in parcel)
// const jsxheading=(<h1 className="head">Namaste React using JSX</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// React components:
// 1) class based components.
// 2) functional components.

// functional components:
// const FunctionalComponent=()=>{
//     return <h1>Namaste react functional component</h1>;
// }

// root.render(<FunctionalComponent />);
// //you can also write it as
// const FunctionalComponent2=()=><h1>Namaste react functional component2</h1>;
// root.render(FunctionalComponent2);

// const Fun=()=>{
//     return true;
// }
//root.render(<fun />);
// const Fun2=()=>true;
// root.render(<fun />);

// both the statements are correct

//you can also create nested functional components

// const Fun3=()=>(
//     <div>
//         <h1>Namaste react nested Functional component</h1>
//     </div>
// )

//their are 3 ways to call a functional component inside a functional component

const Title = () => <h1 classname="head">namaste react using jsx</h1>;

const RestrauntCard = (props) => {
  // console.log("my props are= " ,params.xyz);
  // const {res,xyz} = params
  // console.log("xyz = ", xyz)
  // console.log("res = ", res)
  const { res } = props;
  return (
    <div className="res-card">
      <h2>{res.resName}</h2>
      <h3>{res.foodItems.join(", ")}</h3>
      <h3>Rs {res.cost}</h3>

      {res.ratings !== undefined ? <h3>{res.ratings} stars</h3> : null}
    </div>
  );
};

const resList = [
  {
    resName: "Dominos",
    foodItems: ["pizza", "garlicBread", "coldDrink"],
    cost: 1234,
  },

  {
    resName: "Pizzahut",
    foodItems: ["pizza", "garlicBread", "coldDrink"],
    cost: 1000,
    ratings: 4.4,
  },

  {
    resName: "KFC",
    foodItems: ["chicken", "Burger", "coldDrink"],
    cost: 1203,
    ratings: 3.4,
  },
];
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* <Title/>
    <Title></Title>
    {Title()} */}
      {/* {RestrauntCard(props={resobj1})} */}
      {/* <RestrauntCard res={resobj1} />
    <RestrauntCard res={resobj2} /> */}
      {/* {
        resList.map((resItem) => {
            console.log(resItem)
            resItem.foodItems.map((foodItem) => {
                console.log(foodItem)
            })
        })
    } */}
      {resList.map((resItem) => {
        return <RestrauntCard res={resItem} />;
      })}

      <h1 classname="heading">namaste react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
