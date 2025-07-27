import {useState} from 'react';
import Post from './Post';
import NewPostForm from './NewPostForm';

function App() {
  return (
    <div>
      <NewPostForm />
      <Post />
    </div>
  );
}

export default App;
