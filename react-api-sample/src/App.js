
import './App.css';
import { Routes, Route } from "react-router-dom"
import UserList from './pages/UserList';
import UserPost from './pages/UserPost';
import PostDetail from './pages/PostDetail';
import Header from './components/Header';
import PostList from './pages/PostList';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/users'>
          <Route index element={<UserList />} />
          <Route path=':userId/posts' element={<UserPost />} />
        </Route>

        <Route path='/posts'>
          <Route index element={<PostList />} />
          <Route path=':postId' element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
