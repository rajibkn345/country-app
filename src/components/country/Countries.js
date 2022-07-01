import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
const Countries = (props) => {
	const removeHandler = (ev) => {
		props.onFilter(ev);
	};
	return (
		<>
			<div className='container grid'>
				{props.countries.map((counrty) => {
					return (
						<Country
							key={uuidv4()}
							onRemove={removeHandler}
							counrty={counrty}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Countries;
