import * as React from 'react';
import { observer, inject } from "mobx-react";

import './BookList.scss';
import { action } from 'mobx';

@inject('store')
@observer
class BookList extends React.Component {

  @action
  addBook = () => {
    const { store } = this.props;
    const maxId = store.books[store.books.length - 1].id;
    store.books.push({
      id: maxId + 1,
      title: 'New Book',
      author: 'New Author'
    });
  }

  render() {
    return (
      <div className="container">
        <h1>The Book List</h1>
        <div className="booklist">
        { this.props.store.books.map(book => 
          <div key={book.id}>{book.title} by {book.author}</div> 
        )}
        </div>
        <div className="total">
          Total: {this.props.store.numberOfBooks} books
        </div>
        <button className="add-button" type="button" onClick={this.addBook}>Add a Book</button>
      </div>
    )
  }
}

export default BookList;