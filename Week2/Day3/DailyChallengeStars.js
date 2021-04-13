// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *
let str = '';
for (let i = 0; i < 5; i++) {
	str += '*';
	console.log(str);
}

let str1 = '';
for (let i = 0; i < 5; i++) {
	for (let j = 0; j <= i; j++){
			str1 += '*';
	}
		console.log(str1);
		str1 = '';
}