import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>
        <div>{this.props.activeBook}</div>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  if (state.activeBook === null) {
    return {
      activeBook: 'Nothing'
    }
  }
  return {
    activeBook: state.activeBook.title
  }
}

export default connect(mapStateToProps)(BookDetail);