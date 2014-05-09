# U3.W7: BONUS Using the SQLite Gem

# I worked on this challenge by myself

require 'sqlite3'

$db = SQLite3::Database.open "congress_poll_results.db"

def print_arizona_reps
  puts "AZ REPRESENTATIVES"
  az_reps = $db.execute("SELECT name FROM congress_members WHERE location = 'AZ'")
  az_reps.each { |rep| puts rep }
end

def print_longest_serving_reps(minimum_years)  #sorry guys, oracle needs me, i didn't finish this!
  puts "LONGEST SERVING REPRESENTATIVES"
  puts $db.execute("SELECT name, years_in_congress FROM congress_members WHERE years_in_congress > #{minimum_years}")
  
end

def print_lowest_grade_level_speakers(grade_number)
  puts "LOWEST GRADE LEVEL SPEAKERS (less than < 8th grade)"
  puts $db.execute("SELECT name FROM congress_members WHERE grade_current < #{grade_number}")
  
end

def print_members_by_state(array_of_states)
	puts "MEMBERS BY STATE"
	for i in 0...array_of_states.length
		puts $db.execute("SELECT name, location FROM congress_members WHERE location = '#{array_of_states[i]}'")
	end
end


def print_separator
  puts 
  puts "------------------------------------------------------------------------------"
  puts 
end


print_arizona_reps

print_separator
print_longest_serving_reps(35)
# TODO - Print out the number of years served as well as the name of the longest running reps
# output should look like:  Rep. C. W. Bill Young - 41 years

print_separator
print_lowest_grade_level_speakers(8)
# TODO - Need to be able to pass the grade level as an argument, look in schema for "grade_current" column

print_separator
print_members_by_state(['NJ', 'NY', 'ME', 'FL', 'AK'])
# TODO - Make a method to print the following states representatives as well:
# (New Jersey, New York, Maine, Florida, and Alaska)


##### BONUS #######
# TODO (bonus) - Stop SQL injection attacks!  Statmaster learned that interpolation of variables in SQL statements leaves some security vulnerabilities.  Use the google to figure out how to protect from this type of attack.

# TODO (bonus)
# Create a listing of all of the Politicians and the number of votes they recieved
# output should look like:  Sen. John McCain - 7,323 votes (This is an example, yours will not return this value, it should just 
#    have a similar format)
# Create a listing of each Politician and the voter that voted for them
# output should include the senators name, then a long list of voters separated by a comma
#
# * you'll need to do some join statements to complete these last queries!


# REFLECTION- Include your reflection as a comment below.
# How does the sqlite3 gem work?  What is the variable `$db` holding?

# The sqlite3 gem allows Ruby to access the sqlite3 databse engine.  
# The variable '$db' is holding the entire contents of the 
# database 'congress_poll_results'

# Try to use your knowledge of ruby to decipher this as well as h
# ow the `#execute` method works.  Take a stab at explaining the line 
# `$db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")`.  Try to explain this as clearly as possible for 
# your fellow students.  
# If you're having trouble, find someone to pair on this explanation with you.

# I think #execute is a ruby methodthat can be used to run a database query 
#   (the argument is the query for SQL)
# The code above says:
# 	1) get the database stored in $db (in our case 'congress_poll_results')
#   2) use #execute to run a query on it in SQLite
#   3) the argument is the query asking SQLite to get then names of 
#   congress members that have served a certain minimum number of years 
#   (provided by the user as an argument)

# I think this was the most difficult challenge I have had so far during 
# Phase 0.  The syntax and logic behind SQL is different enough from
# everything else that we've done that it seems like a whole new subject 
# unto itself.  Even though I had an idea of what needed to be done, 
# I constantly had to look up stuff (mostly from w3schools.com) for syntax 
# and commands.  This took a lot of time.  I didn't attempt to do the 
# bonus section this time because of time constraints.  I will go back 
# a try it once I finish the rest of my week 9 material.
	

