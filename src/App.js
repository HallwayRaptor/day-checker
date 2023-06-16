import { useState } from "react";

export default function App() {
	const [step, setStep] = useState(1);
	const [counter, setCounter] = useState(0);
	const [date, setDate] = useState(new Date());

	const dateString = date.toDateString();
	const absoluteDate = Math.abs(counter);
	const handleReset = () => {
		setStep(1);
		setCounter(0);
	};
	const handleStepPlus = () => {
		setStep((step) => step + 1);
	};
	const handleStepMinus = () => step > 1 && setStep((step) => step - 1);

	const handleCounterPlus = () => {
		setCounter((counter) => counter + step);
		setDate((date) => new Date(date.getTime() + 24 * step * 60 * 60 * 1000));
		console.log(date);
	};
	const handleCounterMinus = () => {
		setCounter((counter) => counter - step);
		setDate((date) => new Date(date.getTime() - 24 * step * 60 * 60 * 1000));
	};

	return (
		<div className="container">
			<div className="counter">
				<button onClick={handleStepMinus}>&minus;</button>
				<h2>step: {step}</h2>
				<button onClick={handleStepPlus}>&#43;</button>
			</div>
			<div className="counter">
				<button onClick={handleCounterMinus}>&minus;</button>
				<h2>counter: {counter}</h2>
				<button onClick={handleCounterPlus}>&#43;</button>
			</div>
			<div className="display">
				<span>
					{counter === 0
						? "Today is "
						: `${absoluteDate} ${absoluteDate === 1 ? "day" : "days"} ${
								counter > 0 ? "from now will be " : "ago was "
						  }`}
					{dateString}
				</span>
			</div>
			<div>
				<button onClick={handleReset}>Reset</button>
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
}
