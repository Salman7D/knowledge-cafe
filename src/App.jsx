
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([]);

  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
