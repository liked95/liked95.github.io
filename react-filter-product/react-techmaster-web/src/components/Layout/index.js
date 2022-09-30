import {Outlet} from 'react-router-dom';

import Home from "../../pages/Home";
import Header from "../Header";
import Footer from "../Footer";
import Course from "../../pages/Course";
  



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
