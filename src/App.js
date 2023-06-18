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
		setDate(new Date());
	};

	const handleStep = () => {
		setStep((step) => step);
	};

	const handleCounterChange = (e) => {
		const newCounter = Number(e.target.value);
		const difference = newCounter - counter;
		setCounter(newCounter);
		setDate(
			(date) => new Date(date.getTime() + 24 * difference * 60 * 60 * 1000)
		);
	};

	const handleCounterPlus = () => {
		setCounter((counter) => counter + step);
		setDate((date) => new Date(date.getTime() + 24 * step * 60 * 60 * 1000));
	};
	const handleCounterMinus = () => {
		setCounter((counter) => counter - step);
		setDate((date) => new Date(date.getTime() - 24 * step * 60 * 60 * 1000));
	};

	return (
		<div className="container">
			<div className="counter">
				<input
					type="range"
					min="1"
					max="10"
					value={step}
					onChange={(e) => setStep(Number(e.target.value))}
				/>
				<span>{step}</span>
			</div>

			<div className="counter">
				<button onClick={handleCounterMinus}>&minus;</button>
				<input type="number" value={counter} onChange={handleCounterChange} />
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
			</div>
		</div>
	);
}
