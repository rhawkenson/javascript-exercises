function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	let total = 0;
	for (let i=0; i<arr.length; i++){
		total += arr[i];
		
	} return total;
}

function multiply (arr) {
	let total = 1;
	for (let i=0; i<arr.length; i++){
		total *= arr[i];
	} return total;
}


function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	let total = 1;
	while (num>0){
		total *= num;
		num--;
	} return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

//jasmine calculator.spec.js