import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
     <Header></Header>
     <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      
     </div>
    </div>
  )
}

export default App
