import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: 'sans-serif'
	},
	body: {
		backgroundColor: '$lilac100',
		padding: '$7'
	},
	ul: {
		listStyle: 'none',
	},
});

export default globalStyles;
