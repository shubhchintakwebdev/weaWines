/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import ScrollToTopRoute from './ScrollToTop';
import Home from "./Screens/Home";
import About from "./Screens/About";
import MailingList from "./Screens/MailingList";
import ContactUs from "./Screens/ContactUs";
import Cart from "./Screens/Cart";
import Checkout from "./Screens/Checkout";
import Register from "./Screens/Register";
import PriceList from "./Screens/PriceList";
import NewsPage from "./Screens/NewsPage";
import News from "./Screens/News";
import EventsPage from "./Screens/EventsPage";
import MyAccount from "./Screens/MyAccount";
import { UserProvider } from "./Components/UserContext";
import Wine from "./Components/Wine";
import Postpage from "./Components/Postpage";
import Four04 from "./Screens/404";
import Terms from "./Components/terms";
import Policy from "./Components/policy";

const App = () => {
	window.less
    .modifyVars({
        "@primary-color": "#9b2120",
		"@link-color": "#9b2120"
     })
    .then(() => {
        //do other stuff here
     })
     .catch(error => {
         console.error(error);
     });
	return (
		<UserProvider>
			<Router>
			<Switch>
				<div className="">
					<ScrollToTopRoute component={Home} path="/" exact />
					<ScrollToTopRoute component={About} path="/about" exact />
					<ScrollToTopRoute component={MyAccount} path="/myaccount" exact />
					<ScrollToTopRoute component={PriceList} path="/pricelist" exact />
					<ScrollToTopRoute component={MailingList} path="/mailinglist" exact />
					<ScrollToTopRoute component={ContactUs} path="/contactus" exact />
					<ScrollToTopRoute component={Cart} path="/cart" exact />
					<ScrollToTopRoute component={Checkout} path="/checkout" exact />
					<ScrollToTopRoute component={Register} path="/register" exact />
					<ScrollToTopRoute component={NewsPage} path={["/news"]}  exact />
					<ScrollToTopRoute component={News} path={["/news/:id"]}  exact />
					<ScrollToTopRoute component={EventsPage} path="/event/:id" exact />
					<ScrollToTopRoute component={Wine} path="/winelist" exact />
					<ScrollToTopRoute component={Policy} path="/policy" exact />
					<ScrollToTopRoute component={Terms} path="/terms" exact />
					<ScrollToTopRoute component={Postpage} path="/postpage/:id" exact />
					<ScrollToTopRoute component={Four04} path="/404" exact />
					{/* <Route component={Four04} /> */}
				</div>
				</Switch>
			</Router>
		</UserProvider>
	);
};

export default App;
