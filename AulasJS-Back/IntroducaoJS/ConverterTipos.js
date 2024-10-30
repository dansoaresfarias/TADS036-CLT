let result;

// convert string to number
result = Number("5");
console.log(result, "-", typeof(result));

result = Number(true);
console.log(result, "-", typeof(result));

result = Number(null);
console.log(result, "-", typeof(result));

result = Number("");
console.log(result, "-", typeof(result));

// convert boolean to string
result = String(true);
console.log(result, "-", typeof(result));

result = String(23);
console.log(result, "-", typeof(result));

// convert number to boolean
result = Boolean(0);
console.log(result, "-", typeof(result));

result = Boolean("");
console.log(result, "-", typeof(result));

result = Boolean(null);
console.log(result, "-", typeof(result));

result = Boolean(-1.44);
console.log(result, "-", typeof(result));