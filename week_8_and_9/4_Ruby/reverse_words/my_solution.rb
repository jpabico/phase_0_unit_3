# U3.W8-9: Reverse Words


# I worked on this challenge by myself

# 2. Pseudocode

# define a method reverse_words that takes a string argument (string_input)
# split the string into individual words using the .split method
# take each element of the return array and use the .reverse method on into
# join the elements of the return array using the .join method
# join the elements with spaces in between each word (" " )
# return the resulting string


# 3. Initial Solution

# def reverse_words(string_input)
# 	if string_input == ""
# 		return ""
# 	else
# 		words = string_input.split(" ")
# 		reversed_words = words.map! {|word| word.reverse!}
# 		reversed_words.join(" ")
# 	end
# end

# 4. Refactored Solution

def reverse_words(string_input)
	words = string_input.split(" ")
	reversed_elements = words.map! {|word| word.reverse!}
	reversed_elements.join(" ")
end


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

word = "geography"
word2 = "wristwatch"
def assert
	raise "Assertion failed!" unless yield
end

assert {reverse_words("") == "" }
assert {reverse_words(word) == word.reverse}
assert {reverse_words("#{word} #{word2}") == "#{word.reverse} #{word2.reverse}"}
assert {reverse_words("Ich bin ein Berliner") == "hcI nib nie renilreB"
}


# 5. Reflection 

This was a reassuring exercise in that I was actually able to remember 
everything that I needed to without having to look up anything!  I'm 
sure this is largely in part that this is a simple exercise (whose 
unfactored solution only took 10 lines).  But nonetheless, I'm happy 
that something is sticking in my memory.  Didn't learn anything new in 
terms of methods/procedures/tricks.  





