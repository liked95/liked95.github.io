
import './App.css';
import { Routes, Route } from 'react-router-dom'
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/users'>
          <Route index element={<UserList />} />
          <Route path=":userId" element={<EditUser />} />
          <Route path="create" element={<AddUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
