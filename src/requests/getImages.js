import axios from "axios";

const getImages = async (query) => {
	if (!query) {
		return Promise.resolve([]);
	} else {
		try {
			const response = await axios.get(
				`https://images-api.nasa.gov/search?q=${query}`
			);
			const imageResults = response.data.collection.items;

			const parsedImages = imageResults.filter(
				(item) => item.data[0].media_type === "image"
			);

			const images = parsedImages.map((image) => image.links[0].href);
			console.log(images);
			return images;
		} catch (err) {
			console.log(err);
		}
	}
};

export default getImages;
