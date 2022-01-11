const Pet=()=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h2",{},"Jack"),React.createElement("h3",{},"Oscar"),React.createElement("h3",{},"Enzo")]//3 different elements inside the div element
    );
};
//Here we have a component pet with an element div and inside that div we have another 3 elements(which is done with the help of array).
//By this we have created a pet component a stamp that whenever we use(stamp) anywhere, it creates all of what is inscribed within it.



/*
React Component
*/

const App = () => {
    return React.createElement(
        "div", {},[
            React.createElement("h1", {}, "Adopt a pet Today!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
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