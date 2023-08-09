//1. Copy and paste objects 
//2. Define a refillTotal function calculating the refillTotal
        //refills * pricePerRefill
//3. Define a subscription function.
    // If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
//4. Define a coupon function 
    //If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
//5. Define a checkout function
    //If the customer has a subscription, call the subscription function
    //If the customer has a coupon, call the coupon function
    //!! IF both, call both functions 
    //console.log (“Your grand total is ${finalAmount}.”) per customer 

//1. Objects 

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};
const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}
const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//2. refillTotal function
function refillTotal(pricePerRefill, refills) {
    return pricePerRefill * refills;
}

// console.log(refillTotal(30, 5))

//3. subscription function

function subscription(customer){
    const totalAmount = refillTotal(customer.pricePerRefill, customer.refills)
    if(customer.subscription === true) {
        return totalAmount - (totalAmount * 0.25);
    } else {
        return totalAmount;
    }
}

// console.log(subscription(rocky))

//4. addCoupon function
function addCoupon(customer){
    const subscriptionAmount = subscription(customer)
    if(customer.coupon === true) {
        return subscriptionAmount - 10;
    } else {
        return subscriptionAmount;
    }
} 

// console.log(addCoupon(rocky))


//5. checkout function 
function checkout (customer){
    if (customer.subscription && customer.coupon){
        return subscription, addCoupon(customer)
   }
     else if (customer.subscription) {
        return subscription(customer)
   } else if (customer.coupon) {
        return addCoupon(customer)
   } else {
        return refillTotal(customer.pricePerRefill, customer.refills)
   }
}


console.log("Your grand total is "+ "$" + checkout(timmy))
console.log("Your grand total is "+ "$" + checkout(sarah))
console.log("Your grand total is "+ "$" + checkout(rocky))
 