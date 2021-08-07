import React, { Component } from "react";
import "./Wine.css";
import axios from "axios";
import Nav1 from "./Nav1";
import Footer from "./Footer";
import Burgundy from "./Wine_Components/Burgundy";
import Champagne from "./Wine_Components/Champagne";
import Rhone from "./Wine_Components/Rhone";
import Languedoc from "./Wine_Components/Languedoc";
import Loire from "./Wine_Components/Loire";
import Italy from "./Wine_Components/Italy";
import Thenewspain from "./Wine_Components/Thenewspain";
import Nav2 from "./Nav2";
import Champagnemob from "./Winemob_Components/Champagnemob";
import Beaujolaismob from "./Winemob_Components/Beaujolaismob";
import Languedocmob from "./Winemob_Components/Languedocmob";
import Juramob from "./Winemob_Components/Juramob";
import Savoiemob from "./Winemob_Components/Savoiemob";
import Bordeauxmob from "./Winemob_Components/Bordeauxmob";

class Wine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			selected_option: "burgundy",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				"https://weawines.shubhchintak.co/wp-json/wp/v2/wineries?per_page=100&filter[orderby]=date&order=asc"
			)
			.then((res) => {
				this.setState({
					posts: res.data,
				});
				console.log(this.state.posts)
			});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<div>
				<Nav1 />
				<Nav2 />
				<div className="container-heading">
					<div className="row heading wineries">
						<div className="image middle tc white ">
							<b>WINERIES</b>
						</div>
					</div>
				</div>
				<div className="mobileview">
					<select
						className="select"
						type="text"
						name="selected_option"
						value={this.state.selected_option}
						onChange={this.handleChange}
					>
						<option value="burgundy">Burgundy</option>
						<option value="champagne">Champagne</option>
						<option value="beaujolais">Beaujolais</option>
						<option value="rhone">Rhone</option>
						<option value="languedoc">Languedoc</option>
						<option value="jura">Jura</option>
						<option value="savoie">Savoie</option>
						<option value="bordeaux">Bordeaux</option>
						<option value="loire">Loire</option>
						<option value="thenewspain">The New Spain</option>
						<option value="italy">Italy</option>
					</select>

					<div>
						{(() => {
							switch (this.state.selected_option) {
								case "burgundy":
									return <Burgundy posts={this.state.posts} column="12" />;
								case "champagne":
									return <Champagnemob posts={this.state.posts} />;
								case "beaujolais":
									return <Beaujolaismob posts={this.state.posts} />;
								case "rhone":
									return <Rhone posts={this.state.posts} column="12" />;
								case "languedoc":
									return <Languedocmob posts={this.state.posts} />;
								case "jura":
									return <Juramob posts={this.state.posts} />;
								case "savoie":
									return <Savoiemob posts={this.state.posts} />;
								case "bordeaux":
									return <Bordeauxmob posts={this.state.posts} />;
								case "loire":
									return <Loire posts={this.state.posts} column="12" />;
								case "thenewspain":
									return <Thenewspain posts={this.state.posts} column="12" />;
								case "italy":
									return <Italy posts={this.state.posts} column="12" />;

								default:
									break;
							}
						})()}
					</div>
				</div>

				<div className="websiteview">
					<Burgundy posts={this.state.posts} column="4" />
					<Champagne posts={this.state.posts} />
					<Rhone posts={this.state.posts} column="4" />
					<Languedoc posts={this.state.posts} />
					<Loire posts={this.state.posts} column="4" />
					<Thenewspain posts={this.state.posts} column="4" />
					<Italy posts={this.state.posts} column="4" />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Wine;
