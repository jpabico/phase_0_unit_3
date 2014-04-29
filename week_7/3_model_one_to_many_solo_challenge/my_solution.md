# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
<!-- Identify the fields Twitter collects data for -->
In user profile under settings, Twitter asks for a photo, your full name, location, a website (blog/homepage if available), a short bio of yourself, and a Facebook link.  They also keep track of your number of tweets, how many people you're folowing, number of followers, lists, and favorites

## Release 1: Tweet Fields
<!-- Identify the fields Twitter uses to represent/display a tweet. What are you required or allowed to enter? -->
When starting a new tweet, you can type a message (string, up to 140 characters), add a picture, disclose your location.  Of course, your user name is connected to the tweet as well as information about when the tweet was sent.

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 
<!-- because... -->
I think there is a 1-to-many relationship between users and tweets.  Each user is capable of creating more than one tweet.  Each tweet ultimately originate from a single user.

## Release 3: Schema Design
<!-- Include your image (inline) of your schema -->
![twitter schema](/week_7/imgs/twitter_schema.jpg)

## Release 4: SQL Statements
# messages from a particular user
select tweet_string
from tweets
where id = 'BobbyDude'

# a specific message from a specific user
select content
from tweet_messages
where from_user = 'AbbyBrown' 
and created_on = 123407092011

# a picture associated with a message
select photo
from pictures join tweet_messages on (pictures.from_user = tweet_messages.from_user)
where pictures.created_at = tweet_messages.created_on

# location from where picture was posted
select coordinates
from location join pictures on (user_id = from_user)
where locations.updated_at = pictures.create_at

## Release 5: Reflection
This was a neat challenge.  It allowed me to see first hand how Twitter worked (I had never used Twitter before doing this challenge) and how SQL can be applied.  It almost seems too simple of an idea.  I'm sure there's a lot more to it than I realize, but the basic idea is understandable.  Though I don't find SQL that difficult to pick up, I do feel like I need more practice with it, especially with JOIN statements and nested queries.  
