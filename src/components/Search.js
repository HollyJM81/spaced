import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
	return (
		<>
			<form className="search-form">
				<input className="search-input" type="text" />
				<button className="search-button" type="submit">
					search
				</button>
			</form>
		</>
	);
};

export default Search;
