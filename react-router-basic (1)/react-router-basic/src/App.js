import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10 p-5">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
