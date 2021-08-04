/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import MailingList from "./Screens/MailingList";
import ContactUs from "./Screens/ContactUs";
import Cart from "./Screens/Cart";
import Checkout from "./Screens/Checkout";
import Register from "./Screens/Register";
import PriceList from "./Screens/PriceList";
import NewsPage from "./Screens/NewsPage";
import EventsPage from "./Screens/EventsPage";
import MyAccount from "./Screens/MyAccount";
import { UserProvider } from "./Components/UserContext";
import Wine from "./Components/Wine";
import Postpage from "./Components/Postpage";
const App = () => {
	return (
		<UserProvider>
			<Router>
				<div className="position-relative">
					<Route component={Home} path="/" exact />
					<Route component={About} path="/about" exact />
					<Route component={MyAccount} path="/myaccount" exact />
					<Route component={PriceList} path="/pricelist" exact />
					<Route component={MailingList} path="/mailinglist" exact />
					<Route component={ContactUs} path="/contactus" exact />
					<Route component={Cart} path="/cart" exact />
					<Route component={Checkout} path="/checkout" exact />
					<Route component={Register} path="/register" exact />
					<Route component={NewsPage} path="/news/:id" exact />
					<Route component={EventsPage} path="/event/:id" exact />
					<Route component={Wine} path="/winelist" exact />
					<Route component={Postpage} path="/postpage/:id" exact />
				</div>
			</Router>
		</UserProvider>
	);
};

export default App;
