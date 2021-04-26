// Daily Challenge: Groceries
// Instructions
// Using this object :

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Copy this object using the method that was taught in today’s lesson.
let clone = {...groceries};
// 2. Change the value of totalPrice to 35$.
clone.totalPrice = "35$";
// 3. Change the value of payed to false. Will we also see this modification in the copied objects
let deepClone = JSON.parse(JSON.stringify(groceries));
deepClone.other.payed = false;
