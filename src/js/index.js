//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">{<i className="far fa-stopwatch" />}</div>
			<div className="four">{props.digitFour % 30} dd</div>
			<div>{props.points}</div>
			<div className="three">
				{props.digitThree % 60}
				hh
			</div>
			<div>{props.points}</div>
			<div className="two">
				{props.digitTwo % 60}
				mm
			</div>
			<div>{props.points}</div>
			<div className="one">{props.digitOne % 60}s</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
	points: PropTypes.string
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 6000);
	const three = Math.floor(counter / 600);
	const two = Math.floor(counter / 60);
	const one = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			points=":"
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
// ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
