//import react into the bundle
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// include your styles into the webpack bundle
import "../styles/index.css";

function Counter(props) {
	return (
		<>
			<Container>
				<Row>
					<Col className="counter">
						<Row>
							<Col>
								<div className="col5">
									<i class="fas fa-stopwatch"></i>
								</div>
							</Col>
							<Col>
								<div className="col4">{props.digitFour}</div>
							</Col>
							<Col>
								<div className="col4">{props.digitThree}</div>
							</Col>
							<Col>
								<div className="col2">{props.digitTwo}</div>
							</Col>
							<Col>
								<div className="col1">{props.digitOne}</div>
							</Col>
						</Row>
					</Col>
					<Col xs={4}></Col>
					<Col className="clock">
						<Row className="d-flex justify-content-center">
							<Col>
								{" "}
								<i class="far fa-clock"></i> {props.clockHours}{" "}
								: {props.clockMinutes} .{" "}
								<span className="seconds">
									{props.clockSeconds}
								</span>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}

Counter.PropTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitfour: PropTypes.number,
	clockSeconds: PropTypes.number,
	clockMinutes: PropTypes.number,
	clockHours: PropTypes.number,
};

let counter = 0;
let counterClock = 0;
let varOne = 0;
let varTwo = 0;
let varThree = 0;
let varFour = 0;
let varClockSeconds = 0;
let varClockMinutes = 0;
let varClockHours = 0;
let varClockMinutesOneDigit = 0;
let varClockHoursOneDigit = 0;

setInterval(function () {
	counter++;
	counterClock++;
	varTwo = Math.floor(counter / 10);
	varThree = Math.floor(counter / 100);
	varFour = Math.floor(counter / 1000);

	if (varOne == 9) {
		varOne = 0;
	} else {
		varOne++;
	}

	if (varClockSeconds == 59) {
		varClockSeconds = 0;
		varClockMinutesOneDigit++;
	} else {
		varClockSeconds++;
	}

	if (varClockMinutes == 59) {
		varClockMinutes = 0;
		varClockHoursOneDigit++;
	}

	if (varClockHours == 24) {
		varClockSeconds = 0;
		varClockMinutes = 0;
		varClockHours = 0;
	}

	if (varClockSeconds < 10) {
		varClockSeconds = "0" + varClockSeconds;
	}

	if (varClockMinutes < 10 && counterClock < 600) {
		varClockMinutes = "0" + varClockMinutesOneDigit;
	} else {
		varClockMinutes = varClockMinutesOneDigit;
	}

	if (varClockHours < 10 && counterClock < 36000) {
		varClockHours = "0" + varClockHoursOneDigit;
	} else {
		varClockHours = varClockHoursOneDigit;
	}

	//console.log(varOne, varTwo, varThree, varFour);
	//console.log(varClockHours, varClockMinutes, varClockSeconds);

	ReactDOM.render(
		<Counter
			digitOne={varOne}
			digitTwo={varTwo}
			digitThree={varThree}
			digitFour={varFour}
			clockHours={varClockHours}
			clockMinutes={varClockMinutes}
			clockSeconds={varClockSeconds}
		/>,
		document.querySelector("#app")
	);
}, 1000);
