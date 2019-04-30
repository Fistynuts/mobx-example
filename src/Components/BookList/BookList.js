import * as React from 'react';
import { observer, inject } from "mobx-react";

@inject('store')
@observer
class BookList extends React.Component {
  render() {
    return (
      <div>
        { this.props.store.books.map(book => <div id={book.id}>{book.title}</div>) }
      </div>
    )
  }
}

export default BookList;