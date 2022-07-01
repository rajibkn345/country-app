import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
	const cssClass = `${classes.btn} ${props.className}`;
	return (
		<button className={cssClass} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
