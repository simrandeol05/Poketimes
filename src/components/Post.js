import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleclick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="centre">{this.props.post.title}</h4>
        <p> {this.props.post.body} </p>
        <div className="center">
          <button className="btn grey" onClick={this.handleclick}>
            Delete Button
          </button>
        </div>
      </div>
    ) : (
      <div className="centre">The post is loading...</div>
    );
    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
