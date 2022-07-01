import React from "react";
import Card from "../UI/Card";
import classes from "./Country.module.css";
import Button from "../UI/Button";
const Country = (props) => {
	const { name, flags, capital, population } = props.counrty;
	const removeCountry = () => {
		props.onRemove(name.common);
	};
	return (
		<Card className={classes.country}>
			<img className={classes.flag} src={flags.png} alt={name.common} />
			<h4 className='center my-small'>{name.common}</h4>
			<div className='flex--space'>
				<span className={classes.head}>Capital:</span>
				<span>{capital}</span>
			</div>
			<div className='flex--space'>
				<span className={classes.head}>Population:</span>
				<span>{population}</span>
			</div>
			<Button className='btnCenter' onClick={removeCountry}>
				Remove
			</Button>
		</Card>
	);
};

export default Country;
