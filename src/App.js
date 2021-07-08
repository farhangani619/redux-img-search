import React, { Component } from "react";
import { connect } from "react-redux";

import { actions } from "./store";

class App extends Component {
  formSubmitted(event) {
    // this.setState({
    //   loading: true,
    //   images: []
    // });

    // API.search(this.state.searchTerm).then((images) => {
    //   this.setState({
    //     loading: false,
    //     images
    //   });
    // });
    event.preventDefault();
    this.props.onGetImages(this.props.searchTerm);
  }

  render() {
    const { title, searchTerm, loading, images } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="searchTerm">Search Term</label>
          <input
            onChange={(event) =>
              this.props.onSearchTermChanged(event.target.value)
            }
            value={searchTerm}
            className="u-full-width"
            type="text"
            id="searchTerm"
            name="searchTerm"
          />
          <button type="submit">Search</button>
          {/* <img src="https://www.pexels.com/photo/brown-tabby-cat-lying-on-white-floor-5427090/" alt="cchhc" /> */}
        </form>
        {loading ? (
          <img alt="Loading..." src="https://i.imgur.com/LVHmLnb.gif" />
        ) : (
          ""
        )}
        <section className="images">
          {images.map((image) => {
            return (
              <img
                key={image.id}
                alt={image.photographer}
                src={image.src.medium}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.title,
    searchTerm: state.searchTerm,
    loading: state.loading,
    images: state.images
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actions.searchTermChanged(searchTerm));
    },
    onGetImages(searchTerm) {
      dispatch(actions.getImages(searchTerm));
    }
  };
}

// https://images.pexels.com/photos/5427090/pexels-photo-5427090.jpeg?auto=compress&cs=tinysrgb&h=750&w=12
// https://images.pexels.com/photos/5427090/pexels-photo-5427090.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
export default connect(mapStateToProps, mapDispatchToProps)(App);
