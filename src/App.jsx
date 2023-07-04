import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FileManager from "./pages/FileManager";
import Messages from "./pages/Messages";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<>not found</>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
