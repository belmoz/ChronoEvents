export const colors = {
	background: "rgba(244, 245, 249, 1)",
	foreground: {
		"010": "rgba(66, 86, 122, 0.1)",
		"020": "rgba(66, 86, 122, 0.2)",
		"050": "rgba(66, 86, 122, 0.5)",
		main: "rgba(66, 86, 122, 1)",
	},
	primary: "rgba(93, 95, 239, 1)",
	secondary: "rgba(239, 93, 168, 1)",
	tertiary: "rgba(56, 119, 238, 1)",
};

export const setColorTransparency = (color: string, transparency: number) => {
	return `rgba(${color}, ${transparency})`;
};
