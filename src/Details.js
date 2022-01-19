// import { useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams();
//   return <h2>{id}</h2>;
// };

// export default Details;


/**Dtails.js as a class component,instead of function component */
import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
//   constructor() {
//     super();
//     this.state = { loading: true };
//   }

state = { loading: true };//this can be done with the help of babel and eslint,we donot need to add a constructor 
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);