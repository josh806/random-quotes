import React from 'react';

const Quote = (props) => {
	const renderQuote = () => {
		if (props.quote) {
			const { content, author } = props.quote;
			return (
				<>
					<div className="quoteBox__content" id="text">
						{content}
					</div>
					<div className="quoteBox__author text-right mt-3" id="author">
						{`-- ${author}`}
					</div>
					{renderControls()}
				</>
			);
		}

		return <div>Loading quote</div>;
	};

	const renderControls = () => {
		return (
			<div className="quoteBox__controls flex justify-between mt-8">
				<div>
					<a
						className="quoteBox__btn"
						href="https://twitter.com/intent/tweet"
						target="_blank"
						id="tweet-quote"
						style={{ backgroundColor: props.customColour }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
						</svg>
					</a>
				</div>
				<div>
					<button
						className="quoteBox__btn"
						id="new-quote"
						onClick={() => props.onChangeQuote()}
						style={{ backgroundColor: props.customColour }}
					>
						New quote
					</button>
				</div>
			</div>
		);
	};

	return (
		<div
			id="quote-box"
			className="quoteBox relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 flex flex-col justify-center"
		>
			{renderQuote()}
		</div>
	);
};

export default Quote;
