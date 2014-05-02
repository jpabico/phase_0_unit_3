# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
# define a method called super_fizzbuzz that takes one argument (an array of integers)
# use for loop to go through each element of the the array
# check to see if array element is divisible by 3, 5 or 15
# if divisible, replace element with appropriate string
# return the results

# 3. Initial Solution

# def super_fizzbuzz(array)
# 	for i in 0...array.length
# 		if array[i] % 15 == 0
# 			array[i] = "FizzBuzz"
# 		elsif array[i] % 5 == 0
# 			array[i] = "Buzz"
# 		elsif array[i] % 3 == 0
# 			array[i] = "Fizz"
# 		end
# 	end
# 	return array
# end


# 4. Refactored Solution

def super_fizzbuzz(array)
	array.map { |x|
		if x % 15 == 0
			x = "FizzBuzz"
		elsif x % 5 == 0
			x = "Buzz"
		elsif x % 3 == 0
			x = "Fizz"
		else
		    x = x
		end }
end


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def assert
	raise "Failed Assertion!" unless yield
end

assert {super_fizzbuzz([2, 5, 6, 33, 7, 6]) == [2, "Buzz", "Fizz", "Fizz", 7, "Fizz"]}
assert {super_fizzbuzz([3, 5, 6, 15, 24, 30, 31]) == ["Fizz", "Buzz", "Fizz", "FizzBuzz", "Fizz", "FizzBuzz", 31]}
assert {super_fizzbuzz([2, 4, 8, 14, 16, 28]) == [2, 4, 8, 14, 16, 28]}


# 5. Reflection 

# This was a good challenge for reviewing for loops and array#map.  In my 
# pseudocode and initial solution, I used for loops to iterate through the 
# input array.  In my refactored solution, I decided to go with the #map 
# method for arrays for two reasons: 1) I thought the code was more readable 
# that way, and 2) I wanted the practice of using #map.  As my ongoing 
# project, I'm working on improving my ability to write driver tests and 
# assert statements.  Thinking about and writing the tests first really 
# makes potential solutions more clear to me.  I find it very beneficial 
# and worth the extra time put in at the beginning since I often save time 
# in terms of having less to debug and spending less time thinking about the 
# overstructure of the program while I'm writing it (since I did the planning 
# during the test writing process).

