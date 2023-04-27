import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, country } = this.state;
    axios
      .post("http://127.0.0.1:7070/submit", { name, country })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>My React App</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <label>Country:</label>
            <input type="text" name="country" onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
