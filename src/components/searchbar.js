import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  checkChange = (event) => {
    this.setState({ term: event.target.value });
  };

  forSubmit = (event) =>{
    event.preventDefault();
    this.props.formSubmit(this.state.term);
  }

  render = () => {
    return (
      <form className="ui form" onSubmit={this.forSubmit}>
        <div className="ui huge icon input">
          <input type="text" placeholder="Search ..." onChange={this.checkChange} value={this.state.term} />
          <i className="search icon"> </i>
        </div>
      </form>
    );
  };
}

export default SearchBar;
