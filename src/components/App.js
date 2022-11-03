import React, { useState, useEffect } from 'react';
import useQuotes from '../hooks/useQuotes';
import Quote from './Quote';

const App = () => {
	const [selectedQuote, setSelectedQuote] = useState(null);
	const [quotes] = useQuotes({ tags: 'famous-quotes' });
	let customColour = null;

	useEffect(() => {
		setSelectedQuote(quotes[0]);
	}, [quotes]);

	const handleChangeQuote = () => {
		const prevQuote = selectedQuote;
		let newQuote = prevQuote;
		while (newQuote == prevQuote) {
			newQuote = quotes[Math.floor(Math.random() * quotes.length)];
		}
		setSelectedQuote(newQuote);
	};

	const getStyles = () => {
		const randomNumbers = Array.from({ length: 3 }, () =>
			Math.floor(Math.random() * 256)
		);
		const randomColor = randomNumbers.reduce((acc, curr) => `${acc}, ${curr}`);
		customColour = `rgb(${randomColor})`;

		return {
			color: customColour,
			backgroundColor: customColour,
		};
	};

	return (
		<>
			<div
				className="duration-700 relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 p-6 sm:py-12"
				style={getStyles()}
			>
				<Quote
					quote={selectedQuote}
					onChangeQuote={handleChangeQuote}
					customColour={customColour}
				/>
			</div>
		</>
	);
};

export default App;
