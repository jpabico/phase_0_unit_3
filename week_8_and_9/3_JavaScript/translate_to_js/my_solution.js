// U3.W8-9: Challenge you're converting
// validate_credit_card from week 5

// I worked on this challenge myself

// 2. Pseudocode

// define a function CreditCard with one argument (ccnum)
// convert input ccnum into a string with length = 16
// if not, raise an error
// define a method check_card
// split ccnum into an array of string characters using .split("")
// use for loop to convert each element of array into integer
// multiply every other element by two and replace the original element
// add together the digits of elements greater than 10 and
//    replace the original elements
// add to gether the elements of the resulting array
// if divisible by 10, return true
// otherwise, return false

// 3. Initial Solution

// function CreditCard(ccnum) {

// 	this.ccnum = String(ccnum);
// 	if (this.ccnum.length !=16) {
// 		console.log("There must be 16 digit in a credit card number");
// 	}

// 	this.check_card = function() {
// 		var ccarray = this.ccnum.split("");
// 		for (var i = 0; i < ccarray.length; i++) {
// 			ccarray[i] = Number(ccarray[i]);
// 			if (i%2 == 0) {
// 				ccarray[i] = ccarray[i] * 2;
// 			}
// 		}
// 		var sum = 0;
// 		for (var j = 0; j < ccarray.length; j++) {
// 			if (ccarray[j] >=10) {
// 				sum += Math.floor((ccarray[j])/10) + (ccarray[j])%10;
// 			} else {
// 				sum += ccarray[j]
// 			}
// 		}
// 		if (sum % 10 == 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}

// };
	

// 4. Refactored Solution

function CreditCard(ccnum) {

	this.ccnum = String(ccnum);
	if (this.ccnum.length !=16) {
		console.log("There must be 16 digit in a credit card number");
	}

	this.check_card = function() {
		var ccarray = this.ccnum.split("");
		for (i in ccarray) {
			ccarray[i] = Number(ccarray[i]);
			if (i%2 == 0) {
				ccarray[i] = ccarray[i] * 2;
			}
		}
		var sum = 0;
		for (j in ccarray) {
			if (ccarray[j] >=10) {
				sum += Math.floor((ccarray[j])/10) + (ccarray[j])%10;
			} else {
				sum += ccarray[j]
			}
		}
		var valid = (sum % 10 == 0) ? true : false;
		return valid;
	}

};


// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

var test_card_1 = new CreditCard(8651243992187311);
console.log(test_card_1.ccnum.length == 16);
console.log(test_card_1.ccnum == "8651243992187311");
console.log(test_card_1.check_card() == true);
var test_card_2 = new CreditCard(4545454545454545);
console.log(test_card_2.ccnum.length == 16);
console.log(test_card_2.ccnum == "4545454545454545");
console.log(test_card_2.check_card() == false);




// 5. Reflection 

// This challenge wasn't difficult in terms of figuring out the 
// algorithm / method.  As has been common for the past few weeks, 
// the thing that gets me the most is the syntax.  This was good 
// practice andhelped me remember how Javascript is written (while 
// the Ruby equivalent kept popping into my head).  The funny thing 
// is that Javascript syntax used to be more natural for me and I 
// didn't have to think too hard or search often to figure it out.  
// I now find myself looking things more often, sometimes running 
// accross things that I knew at one point, but not remembering 
// whether or not I've actually seen them.  It's going to take a 
// while before I can get everything organized in my head.







