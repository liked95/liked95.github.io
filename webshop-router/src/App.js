import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Order from "./components/Order"
import OrderDetail from "./components/OrderDetail"
import Products from "./components/Products"
import Customers from "./components/Customers"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import User from "./components/private/User"
import Laptop from "./components/Laptop"
import Desktop from "./components/Desktop"
import PrivateRoutes from "./components/private/PrivateRoutes";

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10 p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/orders">
              <Route index element={<Order />} />
              <Route path=":orderId" element={<OrderDetail />} />
            </Route>

            <Route path="/customers" element={<Customers />} />

            <Route  path="/products" element={<Products />} >
              <Route path='laptop' element={<Laptop />} />
              <Route path='desktop' element={<Desktop />} />
            </Route >

            <Route element={<PrivateRoutes />}>
              <Route index element={<Order />} />
              <Route path="/users" element={<User />} />
            </Route>


            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
