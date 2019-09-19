const hbs = require('hbs');

// helper
hbs.registerHelper('setIndex', function(value) {
	return parseInt(value) + 1;
});

hbs.registerHelper('setCurrency', function(value) {
	return new Intl.NumberFormat('de-DE').format(parseInt(value));
});

hbs.registerHelper('getFirstArrayProductID', function(arr) {
	return arr[0].productID;
});

hbs.registerHelper('getFirstArrayName', function(arr) {
	return arr[0].name;
});

hbs.registerHelper('getFirstArrayPrice', function(arr) {
	return arr[0].price;
});

hbs.registerHelper('pageIsProduct', function(value) {
	if (value === 'product') {
		return 'is-active';
	}
});

module.exports = hbs;