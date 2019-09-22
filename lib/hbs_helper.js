const hbs = require('hbs');

// helper
hbs.registerHelper('getUserId', function(arr) {
	return arr[0].userID;
});

hbs.registerHelper('getUsername', function(arr) {
	return arr[0].name;
});

hbs.registerHelper('getUserEmail', function(arr) {
	return arr[0].email;
});

hbs.registerHelper('getUserGender', function(arr) {
	return arr[0].gender;
});

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

hbs.registerHelper('pageIsSupplier', function(value) {
	if (value === 'supplier') {
		return 'is-active';
	}
});

module.exports = hbs;