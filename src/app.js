/* global React ReactDOM */
/*
**Case 1

const Pet=()=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h2",{},"Jack"),React.createElement("h3",{},"Oscar"),React.createElement("h3",{},"Enzo")]//3 different elements inside the div element
    );
};

    -Here we have a component pet with an element div and inside that div we have another 3 elements(which is done with the help of array).
    -By this we have created a pet component a stamp that whenever we use(stamp) anywhere, it creates all of what is inscribed within it.
*/

//Case2-Props in react
const Pet = (props) => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]
    //Adding Multiple elements inside the div element using array.
  );
};
/**
 * Props are passed on from a parent component to a child component.
 * Props make a component more flexible by enabling them to ne able to react to properties.
 * React only supports one way of data-flow, only parent can send data to the child.
 * The child in react doesn't know who's rendering him.
 * There's no way for the child to interact with the parent,hence there is no way for the child to send data to the parent component.
 */

/*
React Component
*/

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt a pet Today!"),
    /* React.createElement(Pet),
                -when no props is passed along. Matches with case 1.*/

    //Using props to pass values to the component
    React.createElement(Pet, {
      name: "Oscar",
      animal: "dog",
      breed: "Golden Retriver",
    }),
    React.createElement(Pet, {
      name: "Lucas",
      animal: "cat",
      breed: "Persian",
    }),
    React.createElement(Pet, { name: "Enzo", animal: "dog", breed: "Samoyed" }),
  ]);
};
//ReactDOM.render(React.createElement(App,{},null));-> here the extra parameters are optional.
ReactDOM.render(React.createElement(App), document.getElementById("root"));
//The second part of the statement just tells the reactDOM where to put/place the the App component.
//Here it was placed  in the root div that we created in our html.
//{}=> are used to give attributes to the html component that is being created.
//eg. React.createElement("h1",{id="brand-name";color="red"},"Adopt a pet Today!"); this will give the h1 a id and color attribute.
/*
    -App is like a stamp,which can be used anywhere.
    -return React.create..... is like the act of stamping which first stamps a element div and inside that div stamps an h1.
    -ReactDOM helps to interact with the DOM.
    -render is used to add/render the element that is created to the dom.
    inside render the createElement stamps the App component that was created onto the html element specified.  
*/

/*
React Component
*/

/**                                                    JSX
 * In the current senario React.createElements is never used,this is just done for the sake of explaining how react works internally.
 * If an element is to be added JSX with used.
 * Jsx in an Library which interacts with the DOM and manipulates it on behave of react.
 * const element = <h1>Hello, world!</h1>;-> the jsx way of doing thing directly adding html to the js file.
 */
