// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
let petArray = ["Cat","Dog","fish","rabbit","cow"];

// 2. Display dog
console.log(petArray[1]);

// 3. Add to the array pets, the pet horse. Remove the pet rabbit
petArray.push("horse")
petArray.splice(3,1);

// 4. Display the array length
console.log(petArray.length);



