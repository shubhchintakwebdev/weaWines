/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router , Route} from "react-router-dom"
import Home from './Screens/Home'
import About from './Screens/About'
import MailingList from "./Screens/MailingList"
import ContactUs from "./Screens/ContactUs"
import Cart from './Screens/Cart'
import Checkout from './Screens/Checkout'
import Register from "./Screens/Register"
const App = () => {
  return (
     <Router>
       <div className="position-relative">
         <Route component={Home} path="/" exact />
         <Route component={About} path="/about" exact />
         <Route component={MailingList} path="/mailinglist" exact />
         <Route component={ContactUs} path="/contactus" exact/>
         <Route component={Cart} path="/cart" exact/>
         <Route component={Checkout} path="/checkout" exact/>
         <Route component={Register} path="/register" exact />
       </div>
     </Router>
  )
}

export default App
