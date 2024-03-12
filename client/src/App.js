
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/Createpost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from './pages/Allposts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
            
           
            <Route path='/create' element={<CreatePost/>}/>
            <Route path ='/post' element={<AllPosts/>}/>
            
           
    </Routes>
    </BrowserRouter>
  );
}

export default App;
