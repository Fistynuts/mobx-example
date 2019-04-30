import React from 'react';
import { Provider } from 'mobx-react';
import BookStore from './BookStore';
import BookList from './Components/BookList/BookList';

import './App.css';

function App() {

  const bookStore = new BookStore();

  return (
    <Provider store = {bookStore}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
