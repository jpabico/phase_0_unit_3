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
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->

## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->
