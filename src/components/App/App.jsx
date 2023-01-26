import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'


import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';
function App() {

  useEffect(() =>{
    fetchBookList();
}, [])

const dispatch = useDispatch();

  // TODO - GET Book List from server
  const fetchBookList = () => {
    axios.get('/books')
    .then(response => {
      console.log('response', response.data)
      dispatch({type: 'SET_BOOK_LIST', payload: response.data})
    })
    .catch(error =>{
      console.log('cannot get', error);
    })
  }

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;