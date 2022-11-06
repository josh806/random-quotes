import { useState, useEffect } from 'react';
import quotable from '../apis/quotes';

const useQuotes = (quotableParams) => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		console.log(quotableParams);
		getQuotes(quotableParams);
	}, []);

	const getQuotes = async (params) => {
		const quotesData = await quotable.get('/quotes', { params });

		setQuotes(quotesData.data.results);
	};

	return [quotes, getQuotes];
};

export default useQuotes;
