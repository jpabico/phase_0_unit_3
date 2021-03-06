/// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge by myself

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}




// separate office arrays?  push multiples of the candidate array into it?
// example, give index i, then i % 4 == 0 (president), == 1 (vp), etc
// see week 3 p 21 of DBC journal

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode

// break the votes hash into 2 arrays that represent the keys and values;
// any of those arrays that contain hashes should also be broken down 
//   into 2 arrays that represnt the keys and values;
// compare the number of votes in the "values" array for each office 
//   to find the max value;
// push those "values" into the vote count hash;
// match that value to the corresponding element in its "key" array;
// push those "key" values into the officers hash;

// __________________________________________
// Initial Solution

// var key_array = [];
// var value_array = [];
// for (var i in votes) {
//     key_array.push(i);
//     value_array.push(votes[i]);
// }

// var office_array = [];
// var candidate_array=[];
// for (var j = 0; j < value_array.length; j++) {
//     for (var k in value_array[j]) {
//         office_array.push(k);
//         candidate_array.push(value_array[j][k]);
//     }
// }


// var president_array = [];
// var vp_array = [];
// var secretary_array = [];
// var treasurer_array = [];

// for (var m = 0; m < value_array.length; m++) {
//   president_array.push(value_array[m]['president']);
//   vp_array.push(value_array[m]['vicePresident']);
//   secretary_array.push(value_array[m]['secretary']);
//   treasurer_array.push(value_array[m]['treasurer']);
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['president'][president_array[m]] = 0;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['president'][president_array[m]] += 1;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['vicePresident'][vp_array[m]] = 0;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['vicePresident'][vp_array[m]] += 1;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['secretary'][secretary_array[m]] = 0;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['secretary'][secretary_array[m]] += 1;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['treasurer'][treasurer_array[m]] = 0;
// }

// for (var m = 0; m < value_array.length; m++) {
//   voteCount['treasurer'][treasurer_array[m]] += 1;
// }


// var president_keys = [];
// var president_vote_counts = [];

// for (var key in voteCount['president']) {
//   president_keys.push(key);
//   president_vote_counts.push(voteCount['president'][key]);
// }

// var most_votes = president_keys[0];
// var max_votes = president_vote_counts[0];

// for (var m = 1; m <=president_keys.length; m++) {
//   if (president_vote_counts[m] > max_votes) {
//     most_votes = president_keys[m];
//     max_votes = president_vote_counts[m];
//   }
// }

// officers['president'] = most_votes;

// var vp_keys = [];
// var vp_vote_counts = [];

// for (var key in voteCount['vicePresident']) {
//   vp_keys.push(key);
//   vp_vote_counts.push(voteCount['vicePresident'][key]);
// }

// most_votes = vp_keys[0];
// max_votes = vp_vote_counts[0];

// for (var m = 1; m <= vp_keys.length; m++) {
//   if (vp_vote_counts[m] > max_votes) {
//     most_votes = vp_keys[m];
//     max_votes = vp_vote_counts[m];
//   }
// }

// officers['vicePresident'] = most_votes;

// var secretary_keys = [];
// var secretary_vote_counts = [];

// for (var key in voteCount['secretary']) {
//   secretary_keys.push(key);
//   secretary_vote_counts.push(voteCount['secretary'][key]);
// }

// most_votes = secretary_keys[0];
// max_votes = secretary_vote_counts[0];

// for (var m = 1; m <=secretary_keys.length; m++) {
//   if (secretary_vote_counts[m] > max_votes) {
//     most_votes = secretary_keys[m];
//     max_votes = secretary_vote_counts[m];
//   }
// }

// officers['secretary'] = most_votes;

// var treasurer_keys = [];
// var treasurer_vote_counts = [];

// for (var key in voteCount['treasurer']) {
//   treasurer_keys.push(key);
//   treasurer_vote_counts.push(voteCount['treasurer'][key]);
// }

// most_votes = treasurer_keys[0];
// max_votes = treasurer_vote_counts[0];

// for (var m = 1; m <=treasurer_keys.length; m++) {
//   if (treasurer_vote_counts[m] > max_votes) {
//     most_votes = treasurer_keys[m];
//     max_votes = treasurer_vote_counts[m];
//   }
// }

// officers['treasurer'] = most_votes;


// __________________________________________
// Refactored Solution


var votes_value_array = [];
for (var i in votes) {
  votes_value_array.push(votes[i]);
}

var office_array = ['president', 'vicePresident', 'secretary', 'treasurer'];
var candidate_array = [[],[],[],[]];

for (var m = 0; m < votes_value_array.length; m++) {
  for (var i = 0; i < office_array.length; i++) {
    candidate_array[i].push(votes_value_array[m][office_array[i]]);
    if (voteCount[office_array[i]][candidate_array[i][m]] != undefined) {
      voteCount[office_array[i]][candidate_array[i][m]] += 1;
    } else {
      voteCount[office_array[i]][candidate_array[i][m]] = 1;
    }
  }
}

for (var i = 0; i < office_array.length; i++) {
  var voteCount_keys = [];
  var voteCount_values = [];

  for (var key in voteCount[office_array[i]]) {
    voteCount_keys.push(key);
    voteCount_values.push(voteCount[office_array[i]][key]);
  }

  var most_votes = voteCount_keys[0];
  var max_votes = voteCount_values[0];

  for (var m = 1; m <= voteCount_keys.length; m++) {
    if (voteCount_values[m] > max_votes) {
      officers[office_array[i]] = voteCount_keys[m];
      max_votes = voteCount_values[m];
    }
  }
}


// __________________________________________
// Reflection

// Against all best practices in programming, I repeated my code NUMEROUS times
// in this challenge in my initial solution.  I definitely had to do some more 
// research to get my code down to a manageable length and improve its 
// readability.  Overall, I thought this was a fun challenge in terms of 
// getting that "good feeling" when you accomplish something big.  To me, 
// this seemed big (mostly because I broke the D.R.Y rule).  I learned some neat 
// tricks along the way such as how to extract just the keys or just the 
// values of a hash in Javascript.  But once again, I found myself mixing up 
// methods and syntax from Ruby.  In the end, I was able to refactor my code 
// to a fourth of the original length (what do you expect when you remove 
// all the repetition?).


// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)
