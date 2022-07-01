import React, { useEffect, useState } from "react";
import Countries from "./components/country/Countries";
import "./App.css";
import SearchCountry from "./components/country/SearchCountry";

const url = "https://restcountries.com/v3.1/all";
const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [error, setError] = useState(null);
	const [filterCountries, setFilterCountries] = useState(countries);

	const fetchData = async (urlLink) => {
		setIsLoading(true);
		try {
			const response = await fetch(urlLink);
			const data = await response.json();
			setCountries(data);
			setIsLoading(false);
			setError(null);
			setFilterCountries(data);
		} catch (err) {
			setIsLoading(false);
			setError(err);
		}
	};
	useEffect(() => {
		fetchData(url);
	}, []);

	const filterHandler = (name) => {
		const newCountries = filterCountries.filter((c) => {
			return c.name.common !== name;
		});
		setFilterCountries(newCountries);
	};
	const searchFilter = (search) => {
		const searchText = search.toLowerCase();
		const searchCountries = countries.filter((myCountry) => {
			return myCountry.name.common.toLowerCase().startsWith(searchText);
		});
		setFilterCountries(searchCountries);
	};
	return (
		<div className='App'>
			<h1 style={{ color: "grey" }} className='center'>
				Country App
			</h1>
			<SearchCountry onSearch={searchFilter} />
			{isLoading && <h2 className='center'>Loading</h2>}
			{error && <h3>{error.message}</h3>}
			{countries && (
				<Countries onFilter={filterHandler} countries={filterCountries} />
			)}
		</div>
	);
};

export default App;
