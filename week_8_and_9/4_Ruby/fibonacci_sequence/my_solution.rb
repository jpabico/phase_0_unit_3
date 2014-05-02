# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode

# define method called is_fibonacci? that takes one argument (an integer called num)
# define a sum called total (the fibonacci sequence)
# start a while loop that adds a number to total from the previous loop
# in the while loop, check to see if num is equal to or less than total
# if num is equal to total, return true
# if num is less than total, return false


# 3. Initial Solution

# def is_fibonacci?(num)
# first_term = 0
# second_term = 1
# total = first_term + second_term

# if num < 0
# 	return false
# elsif num == 0 or num == 1
# 	return true
# else 

# while num > total

# first_term = second_term
# second_term = total
# total = first_term  + second_term

# end

# if num == total
# 	return true
# else
# 	return false
# end
# end
# end

# a = is_fibonacci?(377)
# b = is_fibonacci?(388)
# puts "'a' is Fibonacci: " + a.to_s
# puts "'b' is Fibonacci: " + b.to_s

# 4. Refactored Solution

def is_fibonacci?(num)

	first_term = 0
	second_term = 1
	total = first_term + second_term

	if num < 0
		return false
	elsif num == 0 or num == 1
		return true
	else 
		while num > total
			first_term = second_term
			second_term = total
			total = first_term  + second_term
		end
		num == total ? true : false
	end
end


# 1. DRIVER TESTS GO BELOW THIS LINE

def assert
	raise "Assertion failed!" unless yield
end

assert {is_fibonacci?(0) == true}
assert {is_fibonacci?(1) == true}
assert {is_fibonacci?(-6) == false}
assert {is_fibonacci?(1597) == true}
assert {is_fibonacci?(1599) == false}


# 5. Reflection

# This was a good way to review what I remembered about while loops in Ruby.
# This was also a good way to remember how to write assert statements (which 
# I had totally forgotten suprisingly!).  During refactoring, I couldn't find
# a way to simplify the syntax (except for the single-line conditional near 
# the end of the method).  Looking at the procedure itself, i couldn't 
# think of another way to perform the calculations for the Fibonacci sequence. 
# I know I still work writing assert statements and coming up with driver 
# tests for my programs.  at the start of this challenge, I forced myself to 
# sit and think of all the tests I was going to use.  In the past, I normally
# thought of 1 or 2 before moving on to the pseudocode.  This is an area in 
# which I'd really like to improve.


