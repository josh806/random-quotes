import { useState, useEffect } from 'react';
import quotable from '../apis/quotes';

const useQuotes = (quotableParams) => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		const getQuotes = async (params) => {
			const quotesData = await quotable.get('/quotes', { params });

			setQuotes(quotesData.data.results);
		};

		console.log(quotableParams);
		getQuotes(quotableParams);
	}, []);

	return [quotes];
};

export default useQuotes;
