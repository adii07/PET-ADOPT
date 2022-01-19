import React from "react";
import { Link } from "react-router-dom";
/** React without JSX */
// const Pet = (props) => {
//     return React.createElement(
//       "div",
//       {},
//       [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h3", {}, props.breed),
//       ]
//     );
//   };
/** React without JSX */


/** React with JSX */
//   const Pet=(props)=>{
//       return(
//           <div>
//               <h2>{props.name}</h2>
//               <h3>{props.animal}</h3>
//               <h3>{props.breed}</h3>
//           </div>
//       );
//   }

//   export default Pet;//Way of exporting in javascript

const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;
  
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
      hero = images[0];
    }
  
    return (
      // <a href={`/details/${id}`} className="pet">
      /**
       * React link
       * linking 2 pages/compnents using react router link attribute.
       * Link works the same anchor tag but where anchor tag refreshes the whole component link only re-render the required/changed component
       */
      <Link to={`/details/${id}`} className="pet"> 
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
        </Link>
      // </a>
    );
  };
  
  export default Pet;

  /**
   * In react we generally tend to make only one component per file.
   * This is not a strict rule to be followed,i.e, a single file can have more then 1 component as seen in App.js, yet it is advicable to follow this rule. 
   */

  /**
   * React with and without JSX, both do the same thing.
   * JSX just take in the html inside of js and once that code runs throught parcel and babel it turns it into the code without JSX.
   * Jsx doesn't do very much for us, it just takes in the html and converts it into javascript that the browser can understand .
   * <div id="whatever"> is equal to React.createElement("h2", {id="whatever"}, props.name),, therefore jsx - decreases the amount of code written
   *                                                                                                        - make it easy to read code
   *                                                                                                        - Makes it possible to directly wite html insde js.
   */