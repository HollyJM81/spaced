import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
	const results = [{}];

	it("renders correctly", () => {
		const { asFragment } = render(<SearchResults results={results} />);
		expect(asFragment()).toMatchSnapshot();
	});

	it("image renders with correct attribute", () => {
		render(<SearchResults results={results} />);
		const image = screen.getByAltText("spaceImage");
		expect(image).toBeInTheDocument();
	});
});
