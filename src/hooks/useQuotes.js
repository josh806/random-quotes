import { useState, useEffect } from 'react';
import quotable from '../apis/quotes';

const useQuotes = (quotableTags) => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		getQuotes(quotableTags);
	}, [quotableTags]);

	const getQuotes = async (tags) => {
		const quotesData = await quotable.get('/quotes', {
			tags: tags,
		});

		setQuotes(quotesData.data.results);
	};

	return [quotes, getQuotes];
};

export default useQuotes;
