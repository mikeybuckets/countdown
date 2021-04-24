import React from "react";
import "./../node_modules/inter-ui/inter.css";
import "./main.css";
import "./../node_modules/xeptaoreset.css/dist/xeptaoreset.min.css";

const App = () => {
	return (
		<>
			<h1>it's getting closer and closer.</h1>
			<div className="countdown-wrapper">
				<div className="months-wrapper">
					<div className="months">00</div>
					<span className="label">months</span>
				</div>
				<div className="days-wrapper">
					<div className="days">00</div>
					<span className="label">days</span>
				</div>
				<div className="hours-wrapper">
					<div className="hours">00</div>
					<span className="label">hours</span>
				</div>
				<div className="minutes-wrapper">
					<div className="minutes">00</div>
					<span className="label">minutes</span>
				</div>
				<div className="seconds-wrapper">
					<div className="seconds">00</div>
					<span className="label">seconds</span>
				</div>
			</div>
		</>
	);
};

export default App;
