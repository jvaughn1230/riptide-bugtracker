import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/login/login";
import AddBug from "./components/addBug/addBug";
import ViewBugs from "./components/viewBugs/viewBugs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/account" element={<Layout />}>
          <Route path="/account/addbug" element={<AddBug />} />
          <Route path="/account/viewbugs" element={<ViewBugs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
