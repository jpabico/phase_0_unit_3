## Evaluate a Website! 
 
1) How does this website follow HTML Best Practices? Are there any places where it does not?  Provide examples of the "bad" code.

Best practices include closing all tags, all tags being lower case, HTML code appropriately commented, and properly nested tags.  Not good practices include removing all the white space, using inline styling, using tables to layout webpage, and not using h1-h6 tags


 
2) What do you think of the HTML? Did the writers use IDs and Classes properly? Did you like the way they used HTML tags?  Please use examples with your arguments.

Although there were some instances of styling with a CSS file, the ids and classes were not taken full advantage of and should have been used to style the HTML elements instead of doing them inline. There were a lot of td and tr tags in the document that, even when "Pretty-fied", made it difficult to read the code.

 

3) How did the authors handle formatting? Did they include it in the HTML or separate it into a CSS file? Or did they do both?  Again, include examples.

They used table tags like < tr > and < td > to layout the webpage.  HTML code should represent the content of the page.  But using tables to format the presentation was not best practice (tables should be used for data and database-related material).  I think it would have been more appropriate to use ordered lists (since they numbered their entries on the original website).


 
4) Did the authors include anything you didn't immediately understand? 
If so, what?

At first I didn't understand the purpose of the id attributes in the HTML code.  They were serial numbers of some sort and didn't have descriptive names to give any indication of their function.  After doing a little bit of reading, I think they were associated with the Javascript code (in the < script > tags in the < head > section) since it contained a 
"document.getElementById(id)" statement and, perhaps, were related to the visibility statements that shortly followed.


 
5) How did the authors organize the CSS file? Was it DRY?

I think for the most part, it was DRY.  A few blocks of the CSS file contained the same one line of code which I feel could have been refactored so they wouldn't have to be repeated so many times.  For example, the were a lot of "color = '#828282'" and "text-decoration='underline'" statements.
 


6) Did the authors incorporate any responsive design into the site?

There was some use of responsive design in the CSS file.  There was a @media only block that changed some of the formatting of the page.
 


7) What are your overall thoughts on the HTML/CSS from this website based on what you've read?

In terms of best practices, I think that they could have done a better job if they had only made a few key changes.  The 3 that come to mind are adding in the white space to make it more readable (though I understand their priority is to speed up load time), using < div > tags or ordered lists to format their content (they have less flexibility in modifying their format if it's all located in cells of tables), and removing the inline styling (what's the point of defining all of the id and class attributes if they're not going to be used).


Reflection

This was a good review of best practices.  I didn't realize how much of this stuff is ingrained in my head already.  Once I was told not to use inline styling, I only used CSS for styling.  When I was told to make things more readable, I made sure that I indented correctly and opted for more "intuitive" code rather than the "complex logic" stuff.  I think this was in big part that here at DBC we are asked to pseudocode, find an initial solution, and refactor our original solution.   







