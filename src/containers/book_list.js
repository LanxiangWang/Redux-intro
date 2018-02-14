import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {
  

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    console.log('current active book is: ', this.props.activeBook);
    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}



// Add Following ...
var mapStateToProps = (state) => {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books,
    activeBook: state.activeBook
  };
};

// Anything returned from this function will end up as props on the BookList container
var mapDispatchToProps = (dispatch) => {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);