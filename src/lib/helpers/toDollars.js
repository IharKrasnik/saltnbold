export default (amount) => {
	return `$${(amount / 100).toFixed(2)}`;
};
