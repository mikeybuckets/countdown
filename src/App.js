import React from "react";
import "./main.css";
import "./../node_modules/xeptaoreset.css/dist/xeptaoreset.min.css";
import "./../node_modules/inter-ui/inter.css";

const App = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const days = document.querySelector(".days");
		const hours = document.querySelector(".hours");
		const minutes = document.querySelector(".minutes");
		const seconds = document.querySelector(".seconds");

		const clock = () => {
			const getTime = () => {
				const currentYear = new Date().getFullYear();
				const nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);
				const timeNow = new Date();
				const difference = timeNow - nextYear;
				const days = Math.floor(difference / 1000 / 60 / 60 / 24);
				const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
				const minutes = Math.floor(difference / 1000 / 60) % 60;
				const seconds = Math.floor(difference / 1000) % 60;

				return { days: days, hours: hours, minutes: minutes, seconds: seconds };
			};

			const timeFinished = () => {
				alert("Happy Christmas! 🎄🎉");
			};

			const updateText = () => {
				const leftTime = getTime();
				const leftDays = Math.abs(leftTime.days);
				const leftHours = Math.abs(leftTime.hours);
				const leftMinutes = Math.abs(leftTime.minutes);
				const leftSeconds = Math.abs(leftTime.seconds);

				if (leftDays === 0 && leftHours === 0 && leftMinutes === 0 && leftSeconds === 0) {
					timeFinished();
				} else {
					days.textContent = leftDays;
					hours.textContent = leftHours;
					minutes.textContent = leftMinutes;
					seconds.textContent = leftSeconds;

					const checkIfShorterThanTwo = (element, value) => {
						element.textContent = element.textContent.length < 2 ? "0" + value : value;
					};

					checkIfShorterThanTwo(days, leftDays);
					checkIfShorterThanTwo(hours, leftHours);
					checkIfShorterThanTwo(minutes, leftMinutes);
					checkIfShorterThanTwo(seconds, leftSeconds);
				}
			};

			updateText();
		};

		clock();

		setInterval(clock, 1000);
	});
	return (
		<div className="App">
			<header id="header" className="spaced-container-large" dir="ltr" lang="en-US">
				<h1 className="heading text-center">new year countdown 🎄</h1>
				<div className="countdown-wrapper margin-auto fit">
					<div className="countdown flex flex-wrap flex-margin">
						<div className="days-wrapper">
							<div className="days big-number">00</div>
							<span className="label">days</span>
						</div>
						<div className="hours-wrapper">
							<div className="hours big-number">00</div>
							<span className="label">hours</span>
						</div>
						<div className="minutes-wrapper">
							<div className="minutes big-number">00</div>
							<span className="label">minutes</span>
						</div>
						<div className="seconds-wrapper">
							<div className="seconds big-number">00</div>
							<span className="label">seconds</span>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default App;
