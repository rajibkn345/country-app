import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import classes from "./SearchCountry.module.css";

const SearchCountry = (props) => {
	const [searchText, setSearchText] = useState("");
	const { onSearch } = props;
	const SearchHandler = (e) => {
		setSearchText(e.target.value);
	};
	useEffect(() => {
		onSearch(searchText);
	}, [searchText, onSearch]);

	return (
		<div className={`center mb-md`}>
			<input
				type='text'
				className={`${classes.formControl} ${classes.input}`}
				placeholder='Search Country'
				onChange={SearchHandler}
			/>
			<Button className={`${classes.btn2} ${classes.formControl}`}>
				Search
			</Button>
		</div>
	);
};

export default SearchCountry;
