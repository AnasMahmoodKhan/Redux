import "./css/App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home.jsx";
import { UserContext } from "./UserContext";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <div className="root-app">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar/>
          <Switch>
            <Route path="/chat/:room_id/:room" component={Chat} /> 
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />

            <Route path="/" component={Home} />
          </Switch>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
