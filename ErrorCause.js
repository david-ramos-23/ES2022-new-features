function doSomething() {
	const clearpay = {};
	try {
		clearpay.do();
	} catch (error) {
		// Catch the error and send it inside cause
		throw new Error('An error ocurred', { cause: error });
	}

	try {
		doSomething();
	} catch (error) {
		// Read the error cause to know what happened
		console.log(error.cause);
	}
}
