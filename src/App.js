import React from "react";

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
    console.log(this.state);
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
