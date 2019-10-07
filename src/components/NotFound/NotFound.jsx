import React from "react";
import { Link } from 'react-router-dom';

function NotFound(props) {
	return (
		<>
			<h2>Ресурс не найден</h2>
			<Link to="/">
				<h1>Назад</h1>
			</Link>
		</>
	);
}

export default NotFound;
