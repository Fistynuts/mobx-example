import * as React from 'react';
import { observer, inject } from "mobx-react";

import './BookList.scss';

@inject('store')
@observer
class BookList extends React.Component {
  render() {
    return (
      <>
        <h1>The Book List</h1>
        <div className="booklist">
          { this.props.store.books.map(book => <div id={book.id}>{book.title} by {book.author}</div>) }
        </div>
      </>
    )
  }
}

export default BookList;