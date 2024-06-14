import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks (newBookmarks);
  }
  return (
    <div className='max-w-screen-xl mx-auto'>
     <Header></Header>
     <div className='md:flex'>
        <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      
     </div>
    </div>
  )
}

export default App
