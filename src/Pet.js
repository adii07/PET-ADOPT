import React from "react";

const Pet = (props) => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
      ]
    );
  };

  export default Pet;//Way of exporting in javascript

  /**
   * In react we generally tend to make only one component per file.
   * This is not a strict rule to be followed,i.e, a single file can have more then 1 component as seen in App.js, yet it is advicable to follow this rule. 
   */