import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import AddNewService from "./components/AddNewService/AddNewService";
import Features from "./components/Features/Features";
import Login from "./components/Forms/Login";
import Home from "./components/Home/Home";
import ManageOrder from "./components/ManageOrders/ManageOrder";
import Notfound from "./components/Notfound/Notfound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/Services/PlaceOrder";
import Services from "./components/Services/Services";
import Footer from "./components/Shared/Footer";
import Topbar from "./components/Shared/Topbar";

import AuthProvider from "./Context/AuthProvider";

// links end-------------------------------/



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Topbar></Topbar>
          {/* ------------------------------ */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* ------------------------------- */}

            <Route path="/home">
              <Home></Home>
            </Route>
            {/* ------------------------------- */}


            <Route path="/features">
              <Features></Features>
            </Route>


            {/* -------------------------------- */}
            <Route path="/about">
              <About></About>
            </Route>

            {/* ---------------------------------- */}

            <Route path="/services">
              <Services></Services>
            </Route>



            {/* -------------private route------------------ */}
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute path="/addService">
              <AddNewService></AddNewService>
            </PrivateRoute>


            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>



            {/* -----------Loging --------------- */}


            <Route path="/login">
              <Login></Login>
            </Route>
            {/* --------------404------------------- */}
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          {/* ----------------------------------- */}

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
